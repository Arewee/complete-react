import React, { useState } from "react";
import Products from "./Products";

function ProductList(props) {
  //console.log(props.newProd);

  return (
    <ul className="list-group shadow">
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product?.pID}
            id={product?.pID}
            name={product.pName}
            description={product.desc}
            isAvailable={product.isAvailable}
            imageUrl={product.image}
            price={product.price}
          ></Products>
        );
      })}
    </ul>
  );
}

export default ProductList;
