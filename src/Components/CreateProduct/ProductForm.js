import React, { useState } from "react";

function ProductForm(props) {
  let [pName, setName] = useState("");
  let [pPrice, setPrice] = useState("");
  let [pDesc, setDesc] = useState("");
  let [pAvailability, setAvailability] = useState(false);
  let [pImage, setImage] = useState("");

  function nameInputHandler(e) {
    setName(e.target.value);
  }

  function priceInputHandler(e) {
    setPrice(e.target.value);
  }

  function descInputHandler(e) {
    setDesc(e.target.value);
  }

  function availabilityInputHandler(e) {
    setAvailability(e.target.checked);
  }

  function imageInputHandler(e) {
    setImage(e.target.value);
  }

  function createProductEventHandler(e) {
    e.preventDefault();
    let product = {
      pName: pName,
      desc: pDesc,
      isAvailable: Boolean(pAvailability),
      image: pImage,
      price: Number(pPrice),
    };
    setName("");
    setDesc("");
    setImage("");
    setPrice("");
    setAvailability(false);

    //console.log(product);
    props.createProduct(product);
  }

  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={pName}
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          value={pPrice}
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDesc}
          onChange={descInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailability}
          onChange={availabilityInputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImage}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
