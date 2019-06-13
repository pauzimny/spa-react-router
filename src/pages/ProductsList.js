import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsList.css";
import * as contentful from "contentful";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const CONTENTFUL_TOKEN = process.env.REACT_APP_CONTENTFUL_TOKEN;
  const CONTENTFUL_SPACE = process.env.REACT_APP_CONTENTFUL_SPACE;

  useEffect(() => {
    const client = contentful.createClient({
      space: CONTENTFUL_SPACE,
      accessToken: CONTENTFUL_TOKEN
    });

    client
      .getEntries({ content_type: "product" })
      .then(contentType => {
        console.log(contentType);
        console.log(contentType.items);
        setProducts(contentType.items);
      })
      .catch(console.error);
  }, []);
  console.log(products);

  const list = products.map((product, index) => (
    <li className="products__item" key={index}>
      <Link
        className="products__link"
        to={{
          pathname: `/product/${product.fields.productName}`,
          state: product
        }}
      >
        <span className="products__container">
          <img
            className="products__image"
            src={product.fields.productAvatar.fields.file.url}
            alt={product.fields.productName}
          />
        </span>
        <span className="products__name">{product.fields.productName}</span>
      </Link>
    </li>
  ));

  return (
    <div className="products">
      <h2 className="products__header">we recommend</h2>
      <div>
        <ul className="products__list">{list}</ul>
      </div>
    </div>
  );
};

export default ProductsList;
