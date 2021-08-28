import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function News() {
  const { category } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=1`
        );

        setArticles(res.data.articles);
        setTotalResults(res.data.totalResults);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [category, API_KEY]);

  return (
    <div style={{ marginTop: "5rem" }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p className="fs-1 text-center">
            Top <b> {String(category).toUpperCase()} </b> headlines - Total:{" "}
            <b>{totalResults}</b>
          </p>
          <div className="container">
            <div className="row">
              {articles.map((article, index) => (
                <NewsItem key={index} article={article} />
              ))}
            </div>
          </div>
          <div className="my-5"></div>
        </>
      )}
    </div>
  );
}
