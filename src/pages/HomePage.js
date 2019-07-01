import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import * as contentful from "contentful";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  // const [assets, setAssets] = useState([]);

  const CONTENTFUL_TOKEN = process.env.REACT_APP_CONTENTFUL_TOKEN;
  const CONTENTFUL_SPACE = process.env.REACT_APP_CONTENTFUL_SPACE;

  useEffect(() => {
    var client = contentful.createClient({
      space: CONTENTFUL_SPACE,
      accessToken: CONTENTFUL_TOKEN
    });
    client.getEntries({ content_type: "article" }).then(entries => {
      setArticles(entries.items);
      // setAssets(entries.includes.Asset);
    });
  }, []);

  const artList = articles.map(article => (
    <Article
      key={article.fields.title}
      title={article.fields.title}
      body={article.fields.articleBody}
      author={article.fields.author}
      date={article.fields.dateAdded}
      img={article.fields.image.fields.file.url}
      source={article.fields.source}
    />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
