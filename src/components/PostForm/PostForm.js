// src/components/PostForm/PostForm.js
import React, { useState } from "react";
import "./PostForm.css";

function PostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, file });
    // 폼 제출 로직 구현
  };

  return (
    <form className="postForm" onSubmit={handleSubmit}>
      <label>
        제목:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        본문:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label>
        파일 첨부:
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </label>
      <button type="submit">글쓰기</button>
    </form>
  );
}

export default PostForm;
