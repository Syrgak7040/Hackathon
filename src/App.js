import "./App.css";
import Bottom from "./components/bottom/Bottom";
import Carousel1 from "./components/carousel/Carousel1";
import Footer from "./components/footer/Footer";
// import Cart from "./components/shop/Cart";

function App() {
  return (
    <div className="App">
      {/* <Cart /> */}
      <Carousel1 />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
