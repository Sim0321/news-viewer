// API 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";

import NewsItem from "./NewsItem";
const API_KEY = process.env.REACT_APP_API_KEY;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기 중
  if (loading) {
    // console.log(loading);
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // articles 값이 설정되지 않았을 때
  if (!articles) {
    // console.log(!articles);
    return null;
  }

  // 사전 레이아웃
  // const sampleArticle = {
  //   title: "제목",
  //   description: "내용",
  //   url: "https://google.com",
  //   urlToImage: "https://via.placeholder.com/160",
  // };

  //articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
