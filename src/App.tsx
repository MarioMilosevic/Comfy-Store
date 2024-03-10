import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Form from "./Form";
import Product from "./components/Product";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from "./components/Pagination";
import { baseUrl } from "./constants";
function App() {
  const [store, setStore] = useState({
    categories: [],
    companies: [],
    products: [],
    totalProducts: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [params, setParams] = useState({
    search: "",
    category : "all",
    company : "all",
    sort: "a-z",
    page: 1
  });


  const urlHandler = ({search,category, company, sort, page}) => {
    const url = `${baseUrl}/search=${search}&category=${category}&company=${company}$order=${sort}&price=100000&page=${page}`
    //   "https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=a-z&price=100000&page=2"
    // i to onda proslijedim u useEffect
    return url
  }
  


  // const url ovaj samo do searcha pa onda u pagination napravim stejt, koji ce da se proslijedi iz ovog glavnog stejta pa ga tako apdejtujem

  
  // const url = ({search, category, company, sort}) => {
  //   const baseUrl = `https://strapi-store-server.onrender.com/api/products?`;
  //   if(search && category && company && sort) {
  //     url = `${baseUrl}${search}${category}${company}${sort}`
  //   }
  // }

  // const [url, setUrl] = useState(
  // );

// const url i stejt parametri, pa kada se promjene parametri da fecam koristeci te parametre unutar url-a


  type UrlHandlerTypes = {
    product: string;
    range: string;
    isChecked: boolean;
    category: string;
    company: string;
    sort: string;
  };

  // const urlHandler = ({
  //   product,
  //   range,
  //   isChecked,
  //   category,
  //   company,
  //   sort,
  // }: UrlHandlerTypes) => {
  //   const shipping = isChecked ? "&shipping=on" : "";

  //   const updatedUrl = `https://strapi-store-server.onrender.com/api/products${product}?search=${product}&category=${category}&company=${company}&order=${sort}&price=${range}${shipping}`;

  //   // setUrl(updatedUrl);
  // };

  const urlPageHandler = (pageNumber: string) => {
    const pageUrl = `https://strapi-store-server.onrender.com/api/products?page=${pageNumber}`;
    // setUrl(pageUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlHandler(params));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const { categories, companies } = data.meta;
        const totalProducts = data.meta.pagination.total;
        const products = data.data;

        setStore({ categories, companies, products, totalProducts });
        console.log("execute");
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
