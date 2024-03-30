import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Title from "../components/Title/Title"; // Title 컴포넌트 import
import PostForm from "../components/PostForm/PostForm";
import Footer from "../components/Footer/Footer";

function UploadPage() {
  return (
    <div>
      <Title text="Post" /> {/* Title 컴포넌트에 "Post" 제목 추가 */}
      <PostForm />
    </div>
  );
}

export default UploadPage;
