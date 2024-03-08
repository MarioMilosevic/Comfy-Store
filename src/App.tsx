import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import Navigation from "./components/Navigation";
import SearchBar from "./SearchBar";

function App() {
  const [initialData, setInitialData] = useState([])
  const [categories, setCategories] = useState([])
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=a-z&price=100000"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setInitialData(data)
        setCategories(data.meta.categories)
        setCompanies(data.meta.companies)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SignIn />
      <Navigation />
      <SearchBar categories={categories} companies={companies}/>
    </>
  );
}

export default App;
