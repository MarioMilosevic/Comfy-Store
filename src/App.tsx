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
    price:100000,
    isChecked:false,
    sort: "a-z",
    page: 1
  });

  const urlHandler = ({search,category, company, price,isChecked,sort, page}) => {
   const shipping = isChecked ? "shipping=on" : "";
    const url = `${baseUrl}search=${search}&category=${category}&company=${company}&order=${sort}&price=${price}&${shipping}page=${page}`
    return url
  }

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
  }, [params]);

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
            params={params}
            paramsHandler={setParams}
              categories={store.categories}
              companies={store.companies}
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
            <Pagination params={params} paramsHandler={setParams}/>
          </Wrapper>
        </>
      )}
    </>
  );
}

export default App;
