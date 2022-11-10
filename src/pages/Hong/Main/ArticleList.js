import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Article from './Article';

const ArticleList = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('../data/feedInfo.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);
  const feedd = feedList.map((feedlist, na) => {
    return <Article key={na} feedlist={feedlist} />;
  });
  return feedd;
};

export default ArticleList;
