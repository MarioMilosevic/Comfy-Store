import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Form from "./Form";
import Product from "./components/Product";

function App() {
  const [initialData, setInitialData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=high&price=100000"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.data);
        const {categories, companies} = data.meta
        setInitialData(data);
        setCategories(categories);
        setCompanies(companies);
        setProducts(data.data);
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
      <Wrapper>
        <Form categories={categories} companies={companies} />
        <div className="border-b py-4 text-sm mb-10">
          <p>22 Products</p>
        </div>
        <section className="py-4 grid grid-cols-3 gap-4">
          {products.map((product) => {
            console.log(product);
            const { image, title, price, id } = product.attributes;
            return (
              <Product key={id} image={image} title={title} price={price} />
            );
          })}
        </section>
      </Wrapper>
    </>
  );
}

export default App;
