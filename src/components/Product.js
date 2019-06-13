import React from "react";
import "../styles/Product.css";

const Product = props => {
  const image = <img className="product__img" src={props.src} alt={props.id} />;

  return (
    <article className="product">
      <h1 className="product__name">{props.id}</h1>
      <section className="product__container">
        <h3 className="product__description">
          {props.description}
          <span className="product__description--buy">
            <a className="product__description--link" href={props.url}>
              Buy on official site
            </a>
          </span>
        </h3>
        <div className="product__container--image">{image}</div>
      </section>
    </article>
  );
};

export default Product;
