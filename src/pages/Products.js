import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const Products = ({ match, location, params }, props) => {
  console.log(location);
  console.log(match);
  console.log(params);
  console.log(props);
  return (
    <React.Fragment>
      <div className="product-site">
        <Link className="product-site__link" to="/products">
          > products list
        </Link>
        <span className="product-site__item"> > {match.params.id}</span>
      </div>
      <Product
        id={match.params.id}
        description={location.state.fields.productDescription}
        src={location.state.fields.productAvatar.fields.file.url}
        url={location.state.fields.productUrl}
      />
      {/* <Link className="product-link" to="/products">
        Powrót do listy produktów
      </Link> */}
    </React.Fragment>
  );
};

export default Products;
