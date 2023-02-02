import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from "./components/Navbar/Brand";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./components/Navbar/AdminPage";
import "./App.css";
// import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";
import EditProduct from "./components/Product/EditProduct";
import AddProduct from "./components/Product/AddProduct";
import ProductList from "./components/Product/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContextProvider>
          <Routes>
            {/* <Navbar /> */}
            {/* <Route path="/" element={<Navbar />} /> */}
            <Route path="/" element={<Brand />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/edit" element={<EditProduct />} />
            <Route path="/create" element={<AddProduct />} />
          </Routes>
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
