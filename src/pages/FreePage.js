// JobPage.js 및 FreePage.js 예시
import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트를 import 합니다.
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Title from "../components/Title/Title";
import PostItem from "../components/PostItem/PostItem";
import Footer from "../components/Footer/Footer";
import "./style/boardPage.css";

const mockPosts = [
  { id: 1, title: "첫 번째 게시글", author: "홍길동", date: "2024-03-28" },
  { id: 2, title: "두 번째 게시글", author: "이순신", date: "2024-03-29" },
  { id: 3, title: "세 번째 게시글", author: "장보고", date: "2024-03-30" },
];

function FreePage() {
  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <Title text="필기 공유" />
        <Link to="/upload" className="writeButton">
          글쓰기
        </Link>{" "}
        {/* 글쓰기 버튼 추가 */}
      </div>
      {mockPosts.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default FreePage;
