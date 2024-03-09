import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Form from "./Form";
import Product from "./components/Product";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from "./components/Pagination";

function App() {
  const [store, setStore] = useState({
    categories: [],
    companies: [],
    products: [],
    totalProducts: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const [url, setUrl] = useState(
    "https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=a-z&price=100000"
  );

  type UrlHandlerProps = {
    product:string,
    range:string,
    isChecked:boolean,
    category:string,
    company:string,
    sort:string
  }

  const urlHandler = ({
    product,
    range,
    isChecked,
    category,
    company,
    sort,
  }:UrlHandlerProps) => {
    const shipping = isChecked ? "&shipping=on" : "";

    const updatedUrl = `https://strapi-store-server.onrender.com/api/products${product}?search=${product}&category=${category}&company=${company}&order=${sort}&price=${range}${shipping}`;

    setUrl(updatedUrl);
  };

  const urlPageHandler = (pageNumber:string) => {
    const pageUrl = `https://strapi-store-server.onrender.com/api/products?page=${pageNumber}`;
    setUrl(pageUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const { categories, companies } = data.meta;
        const totalProducts = data.meta.pagination.total;
        const products = data.data;

        setStore({ categories, companies, products, totalProducts });

        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {isLoaded && (
        <>
          <SignIn />
          <Navigation />
          <Wrapper>
            <Form
              categories={store.categories}
              companies={store.companies}
              urlHandler={urlHandler}
            />
            <div className="border-b py-4 text-sm mb-10">
              <p>{store.totalProducts} Products</p>
            </div>
            <section className="py-4 grid grid-cols-3 gap-4">
              {store.products.map((product) => {
                const { attributes } = product;
                const { image, title, price, id } = attributes;
                return (
                  <Product key={id} image={image} title={title} price={price} />
                );
              })}
            </section>
            <Pagination urlPageHandler={urlPageHandler} />
          </Wrapper>
        </>
      )}
    </>
  );
}

export default App;
