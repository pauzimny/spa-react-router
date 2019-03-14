import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const Products = ({ match }) => {
  return (
    <React.Fragment>
      <div className="product-site">Strona produktu</div>
      <Product id={match.params.id} />
      <Link className="product-link" to="/products">
        Powrót do listy produktów
      </Link>
    </React.Fragment>
  );
};

export default Products;
