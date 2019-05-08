import React from "react";
import "../styles/Article.css";

const Article = props => {
  return (
    <article>
      <h3>{props.fields.title}</h3>
      <p>{props.fields.postBody}</p>
      <span>{props.fields.author}</span>
    </article>
  );
};

export default Article;
