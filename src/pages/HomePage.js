import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import * as contentful from "contentful";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    var client = contentful.createClient({
      space: "a6x3r1vs2g9c",
      accessToken: "y0oZpRPX5uHlU72fueFoiLrvKaHVo8txWX6UniyjAsc"
    });
    client.getEntries().then(entries => {
      console.log(entries.items);
      setArticles(entries.items);
    });
  }, []);

  const artList = articles.map(article => (
    <Article
      key={article.fields.title}
      title={article.fields.title}
      body={article.fields.postBody}
      author={article.fields.author}
      date={article.fields.dateAdded}
    />
  ));
  console.log(artList);

  return <div className="home">{artList}</div>;
};

export default HomePage;
