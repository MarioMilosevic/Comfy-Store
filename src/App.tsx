import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Form from "./Form";
import Product from "./components/Product";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [store, setStore] = useState({
    categories: [],
    companies: [],
    products: [],
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [url, setUrl] = useState(
    "https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=high&price=100000"
  );

  const urlHandler = ({
    product,
    range,
    isChecked,
    category,
    company,
    sort,
  }) => {
    const shipping = isChecked ? "&shipping=on" : "";
    console.log("product",product,"range",range,"isChecked",isChecked,"category",category,"company",company,"sort",sort)

    const updatedUrl = `https://strapi-store-server.onrender.com/api/products${product}?search=${product}&category=${category}&company=${company}&order=${sort}&price=${range}${shipping}`;


    const mario = "https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=high&price=100000"
    console.log(updatedUrl)
    console.log(mario)


    setUrl(updatedUrl);
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
        const products = data.data;

        setStore({ categories, companies, products });

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
              <p>{store.products.length} Products</p>
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
          </Wrapper>
        </>
      )}
    </>
  );
}

export default App;
