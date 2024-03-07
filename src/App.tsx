// https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=a-z&price=100000
import SignIn from "./components/SignIn";
import Navigation from "./components/Navigation";
import SearchBar from "./SearchBar";
function App() {
  return (
    <>
      <SignIn />
      <Navigation/>
      <SearchBar/>
    </>
  );
}

export default App;
