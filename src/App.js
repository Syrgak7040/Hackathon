import Routes1 from "./components/routes/MainRoutes";
import "./App.css";
import Bottom from "./components/bottom/Bottom";
import Carousel1 from "./components/carousel/Carousel1";
import Footer from "./components/footer/Footer";
// import AddProduct from "./components/Product/AddProduct";
// import ProductList from "./components/Product/ProductList";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./components/products/Products";
import Cart from "./components/Cart/Cart";
import { Navbar } from "react-bootstrap";
import MainRoutes from "./components/routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
