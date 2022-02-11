import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./SampleArticlesDB";
import Error from "../error/Error";
import Comments from "./Comments";
import UpvotesSection from "./UpvotesSection";
import AddComments from "./AddComments";

function Article(props) {
  const { name } = useParams();
  //temporary storge of db
  const [articleData, setarticleData] = useState({ upvotes: 0, comments: [] });

  //matching name parameter
  const article = articleContent.find((i) => i.name === name);

  //backend connection api fetch
  useEffect(() => {
    fetchAPI();
  }, [name]);

  //backend connection api fetch
  async function fetchAPI() {
    try {
      const response = await fetch(`/api/article/${name}`);
      if (response.ok) {
        const body = await response.json();
        console.log(body);
        setarticleData(body);
        
      } else {
      }
    } catch (error) {}
  }

  //article not exist in DB
  if (!article) return <Error />;

  return (
    <div>
      <h1>{article.name}</h1>
      <UpvotesSection name = {name} setarticleData ={setarticleData} upvotes ={articleData.upvotes} />
      <h1 className="article">This is {article.title} Article</h1>
      
      <p>{article.description}</p>
      <Comments comments ={articleData.comments} />
      <AddComments name = {name} setarticleData ={setarticleData}/>
    </div>
  );
}

export default Article;
