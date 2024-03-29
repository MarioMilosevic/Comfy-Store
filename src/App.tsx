import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import Products from "./components/Products";
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
    category: "all",
    company: "all",
    price: 100000,
    isChecked: false,
    sort: "a-z",
  });

  const [currentPage, setCurrentPage] = useState(1);


  type UrlTypes = {
    search: string;
    category: string;
    company: string;
    price: string;
    isChecked: boolean;
    sort: string;
  };

  const urlHandler = (
    { search, category, company, price, isChecked, sort }: UrlTypes,
    page
  ) => {
    const shipping = isChecked ? "shipping=on" : "";
    const url = `${baseUrl}search=${search}&category=${category}&company=${company}&order=${sort}&price=${price}&${shipping}page=${page}`;
    return url;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlHandler(params, currentPage));
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
              setParams={setParams}
              categories={store.categories}
              companies={store.companies}
              setCurrentPage={setCurrentPage}
            />
            <Products store={store} />
            {store.totalProducts === 0 && <p>No products found</p>}
            <Pagination
              params={params}
              setParams={setParams}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Wrapper>
        </>
      )}
    </>
  );
}

export default App;
