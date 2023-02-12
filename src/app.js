import React from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

function App() {
  return (
    <div>
      <CreateProduct></CreateProduct>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
