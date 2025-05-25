import React, { useState } from "react";
import axios from "axios";
import styles from "./PostForm.module.css";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
      })
      .then((response) => {
        console.log("Пост додано:", response.data);
        setTitle("");
        setBody("");
      })
      .catch((error) => {
        console.error("Помилка:", error);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>API Демонстрація</div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.inputField}
          placeholder="Текст поста"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Додати пост
        </button>
      </form>
    </div>
  );
}

export default PostForm;
