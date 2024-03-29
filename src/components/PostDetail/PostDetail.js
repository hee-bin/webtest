// src/components/PostDetail/PostDetail.js
import React from "react";
import "./PostDetail.css";

function PostDetail({ title, content, author, uploadTime }) {
  return (
    <div className="postDetail">
      <h3>{title}</h3>
      <p className="content">{content}</p>
      <p className="meta">
        {author} | {uploadTime}
      </p>
    </div>
  );
}

export default PostDetail;
