import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./PostList.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data.slice(0, 5))) // обмежуємо тут
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error("Помилка:", error.message);
        } else {
          console.error("Невідома помилка:", error);
        }
      });
  }, []);

  return (
    <div className={styles.postListContainer}>
      <h2 style={{ color: "#6b336e", marginBottom: "20px" }}>Список постів</h2>
      {posts.map((post) => (
        <div key={post.id} className={styles.postCard}>
          <div className={styles.postTitle}>{post.title}</div>
          <div className={styles.postBody}>{post.body}</div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
