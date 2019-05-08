import React, { useEffect, useState } from "react";
import Article from "../components/Article";

const contentful = require("contentful");

// const articles = [
//   {
//     id: 1,
//     title: "Lorem",
//     author: "Autor 1",
//     text:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ex suscipit illum quisquam adipisci aliquam eum id doloribus nihil reiciendis, tempore laudantium provident iure nemo accusantium, cumque culpa recusandae eaque!"
//   },
//   {
//     id: 2,
//     title: "Ipsum",
//     author: "Autor 2 ",
//     text:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ex suscipit illum quisquam adipisci aliquam eum id doloribus nihil reiciendis, tempore laudantium provident iure nemo accusantium, cumque culpa recusandae eaque!"
//   },
//   {
//     id: 3,
//     title: "Dolor",
//     author: "Autor 3",
//     text:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ex suscipit illum quisquam adipisci aliquam eum id doloribus nihil reiciendis, tempore laudantium provident iure nemo accusantium, cumque culpa recusandae eaque!"
//   }
// ];

const HomePage = () => {
  // let articlesArray = [];
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: "a6x3r1vs2g9c",
      accessToken: "Sia1XFnJFLDicRbxg5iq_cubtezrbIHCpwNAdd-U01s"
    });
    client.getEntries({ content_type: "postBlog" }).then(response => {
      setArticles([...articles, response]);
    });
  });

  const artList = articles.map((article, index) => (
    <Article key={article.index} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
