import { useState, useEffect } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((res) => {
      res.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map(
          (post: {
            title: string;
            summary: string;
            cover: string;
            content: string;
          }) => <Post {...post} />
        )}
    </>
  );
};

export default Home;
