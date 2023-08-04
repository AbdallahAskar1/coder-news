import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/posts").then((res) =>
      res.json().then((data) => {
        setPosts(data.posts);
        console.log(posts)
      })
    );
  },[]);
  return (
    <>
      <h1>hi everyone {JSON.stringify(posts)} {posts.map(post=>post.title)}</h1>
    </>
  );
}

// export default App
