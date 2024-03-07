// https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=a-z&price=100000
import SignIn from "./components/SignIn";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <SignIn />
      <Navigation/>
    </>
  );
}

export default App;
