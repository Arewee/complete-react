import React, { useState } from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
//import LiftState from "./LiftState";

const products = [
  {
    pID: 1,
    pName: "fresh milk",
    desc: "lorem ipsum asdfasdf asdfasdf asdfasdsdf.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    price: 14,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
  },
  {
    pID: 6,
    pName: "Kuk oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
  },
];

function App() {
  let [newProductList, setNewProductList] = useState(products);
  let [filterProducts, setFilterProducts] = useState("all");

  let filteredProductList = newProductList.filter((product) => {
    if (filterProducts === "available") {
      return product.isAvailable === true;
    } else if (filterProducts === "unavailable") {
      return product.isAvailable === false;
    } else {
      return product;
    }
  });
  // let [liftTest, setLiftTest] = useState("");
  // const skickaProppis = "Im a props!";
  // function testLift(name) {
  //   console.log(name);
  //   setLiftTest(name);
  // }
  // console.log(liftTest);

  function createProduct(product) {
    product.pID = newProductList.length + 1;
    setNewProductList([product, newProductList]);
  }

  function onFilterValueSelected(filterValue) {
    setFilterProducts(filterValue);
  }

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct}></CreateProduct>
        <FilterProduct
          onFilterValueSelected={onFilterValueSelected}
        ></FilterProduct>
        <ProductList newProductList={filteredProductList}></ProductList>
        {/* <LiftState liftis={testLift} minProps={skickaProppis}></LiftState> */}
        {/* <p style={{ textAlign: "center" }}>{liftTest}</p> */}
      </div>
    </div>
  );
}

export default App;
