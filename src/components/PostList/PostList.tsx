import { useEffect, useState } from "react";

export type Post = {
  userId: number;
  id: SVGAnimatedNumberList;
  title: string;
  body: string;
};

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((posts) => setPosts(posts as Post[]));
    };

    fetchPosts();
  }, []);
  return (
    <>
      {posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map(({ id, title, body }) => (
            <div key={String(id)} style={{ width: "30rem" }}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};
