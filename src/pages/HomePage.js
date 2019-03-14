import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Lorem",
    author: "Autor 1",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ex suscipit illum quisquam adipisci aliquam eum id doloribus nihil reiciendis, tempore laudantium provident iure nemo accusantium, cumque culpa recusandae eaque!"
  },
  {
    id: 2,
    title: "Ipsum",
    author: "Autor 2 ",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ex suscipit illum quisquam adipisci aliquam eum id doloribus nihil reiciendis, tempore laudantium provident iure nemo accusantium, cumque culpa recusandae eaque!"
  },
  {
    id: 3,
    title: "Dolor",
    author: "Autor 3",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ex suscipit illum quisquam adipisci aliquam eum id doloribus nihil reiciendis, tempore laudantium provident iure nemo accusantium, cumque culpa recusandae eaque!"
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
