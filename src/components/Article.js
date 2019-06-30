import React from "react";
import "../styles/Article.css";

const Article = props => {
  console.log(props);

  return (
    <article className="article">
      <h3 className="article__title">{props.title}</h3>
      <section className="article__content">
        <img className="article__img" src={props.img} alt="cosmetics" />
        <p className="article__post">{props.body}</p>
      </section>

      <p className="article__date">{props.date}</p>
      <p className="article__author">Added by: {props.author}</p>
      <p className="article__source">
        {" "}
        Source:
        <a
          className="article__source--link"
          href={props.source}
          alt="article-source"
        >
          {props.source}
        </a>
      </p>
    </article>
  );
};

export default Article;
