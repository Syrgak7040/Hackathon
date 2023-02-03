import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from "./components/Navbar/Brand";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./components/Navbar/AdminPage";
import "./App.css";
// import Navbar from "./components/NavbarProd";
// import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";
import EditProduct from "./components/Product/EditProduct";
import AddProduct from "./components/Product/AddProduct";
import ProductList from "./components/Product/ProductList";
import NavbarProd from "./components/NavbarProd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContextProvider>
          <Navbar />
          <Routes>
            {/* <Navbar /> */}
            <Route path="/brand" element={<Brand />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/edit" element={<EditProduct />} />
            <Route path="/create" element={<AddProduct />} />
            <Route path="/qwer" element={<NavbarProd />} />
          </Routes>
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
