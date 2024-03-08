import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Form from "./Form";
import Product from "./components/Product";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [initialData, setInitialData] = useState({
    initialCategories: [],
    initialCompanies: [],
    initialProducts: [],
  });
  const [isLoaded, setIsLoaded] = useState(false);

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
        const { categories, companies } = data.meta;
        const [...products] = data.data;
        setInitialData((previous) => ({
          ...previous,
          initialCategories: categories,
          initialCompanies: companies,
          initialProducts: products,
        }));
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
              categories={initialData.initialCategories}
              companies={initialData.initialCompanies}
            />
            <div className="border-b py-4 text-sm mb-10">
              <p>22 Products</p>
            </div>
            <section className="py-4 grid grid-cols-3 gap-4">
              {initialData.initialProducts.map((product) => {
                const { image, title, price, id } = product.attributes;
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
