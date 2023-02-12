import React, { useState } from "react";
import Button from "./Button";

function ProductDetails(props) {
  let badgeClass = "badge-margin-left-240 badge "; // med space! (för tex bg-danger)
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

  //let productCount = 0;

  let [productCount, setProductCount] = useState(0);

  function displayProdCount() {
    return productCount > 0 ? productCount : "zero";
  }

  let incProdCount = function () {
    // productCount++;
    // console.log(productCount);
    setProductCount((prev) => prev + 1);
  };

  let decProdCount = function () {
    // productCount--;
    // console.log(productCount);
    setProductCount((prev) => prev - 1);
  };

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: "3rem" }}>
        {props.price} kr
      </h6>
      <Button eventHandler={decProdCount}>-</Button>
      <span style={{ padding: 30, fontSize: 20 }}>{displayProdCount()}</span>
      <Button eventHandler={incProdCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Slut i lager"}
      </span>
    </div>
  );
}

export default ProductDetails;
