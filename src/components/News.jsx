import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News() {
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
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=1`
        );

        setArticles(res.data.articles);
        setTotalResults(res.data.totalResults);
        setPage(2);
      } catch (error) {
        console.log(error);
        setRateLimited(true);
      }
      setLoading(false);
    };
    fetchNews();
  }, [category, API_KEY]);

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
    <div style={{ marginTop: "5rem" }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {rateLimited ? (
            <>
              <p className="fs-1 text-center">Something went wrong! 😟</p>
              <p className="fs-3 text-center">
                Please try again after sometime
              </p>
            </>
          ) : (
            <p className="fs-1 text-center">
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
