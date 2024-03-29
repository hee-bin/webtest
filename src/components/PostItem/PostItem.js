// src/components/PostItem/PostItem.js
import React from "react";
import "./PostItem.css";

function PostItem({ title, author, date }) {
  return (
    <div className="postItem">
      {" "}
      {/* 이 부분에 클래스 이름을 추가합니다 */}
      <h3>{title}</h3>
      <div>
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default PostItem;
