import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import AddProduct from "./components/addProduct/AddProduct";
import Backet from "./components/backet/Backet";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="product" element={<Product />} />
        <Route path="backet" element={<Backet />} />
      </Routes>
    </div>
  );
}

export default App;
