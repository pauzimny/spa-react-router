import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsList.css";

const products = ["kremy", "mydła", "balsamy do ciała"];
const ProductsList = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>lista produktów</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductsList;
