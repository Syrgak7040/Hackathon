
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from "./components/Navbar/Brand";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/brand" element={<Brand />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );



export default App;
