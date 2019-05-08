import React from "react";
import "../styles/Article.css";

const Article = props => {
  console.log(props);
  return (
    <article className="article">
      <h3 className="article__title">{props.title}</h3>
      <p className="article__post">{props.body}</p>
      <p className="article__date">{props.date}</p>
      <p className="article__author">{props.author}</p>
    </article>
  );
};

export default Article;
