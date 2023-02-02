import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from "./components/Navbar/Brand";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./components/Navbar/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
