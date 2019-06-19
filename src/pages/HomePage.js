import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import * as contentful from "contentful";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [assets, setAssets] = useState([]);

  const CONTENTFUL_TOKEN = process.env.REACT_APP_CONTENTFUL_TOKEN;
  const CONTENTFUL_SPACE = process.env.REACT_APP_CONTENTFUL_SPACE;

  useEffect(() => {
    var client = contentful.createClient({
      space: CONTENTFUL_SPACE,
      accessToken: CONTENTFUL_TOKEN
    });
    client.getEntries({ content_type: "article" }).then(entries => {
      console.log(entries);
      setArticles(entries.items);
      setAssets(entries.includes.Asset);
    });
  }, []);
  console.log(articles);
  console.log(assets);

  // const image = assets.map(asset => {
  //   return <img src={asset.fields.file.url} alt="Asset" />;
  // });
  const artList = articles.map(article => (
    <Article
      key={article.fields.index}
      title={article.fields.title}
      body={article.fields.articleBody}
      author={article.fields.author}
      date={article.fields.dateAdded}
      img={article.fields.image.fields.file.url}
      source={article.fields.source}
    />
  ));
  console.log(artList);

  return (
    <div className="home">
      {/* <span>{image}</span> */}
      {artList}
    </div>
  );
};

export default HomePage;
