import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Error from "./Error";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News({ setProgress }) {
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  const { category } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(2);
  const [rateLimited, setRateLimited] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setProgress(10);
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
        );

        setArticles(res.data.articles);
        setTotalResults(res.data.totalResults);
        setPage(2);
        setProgress(70);
      } catch (error) {
        console.log(error);
        setRateLimited(true);
      }
      setLoading(false);
      setProgress(100);
    };
    fetchNews();
  }, [category, API_KEY, setProgress]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=${page}`
      );

      setArticles(articles.concat(res.data.articles));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "auto",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#181b1f" : "white",
        padding: "5rem 0",
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {rateLimited ? (
            <Error />
          ) : (
            <p
              className={`fs-1 text-center text-${darkMode ? "secondary" : ""}`}
            >
              Top <b> {String(category).toUpperCase()} </b> headlines - Total:
              <b>{totalResults}</b>{" "}
            </p>
          )}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={totalResults > articles.length}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articles.map((article, index) => (
                  <NewsItem key={index} article={article} />
                ))}
              </div>
            </div>
          </InfiniteScroll>

          <div className="my-5"></div>
        </>
      )}
    </div>
  );
}
