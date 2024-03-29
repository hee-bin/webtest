// src/pages/MainPage.js
import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function MainPage() {
  return (
    <div>
      <Header />
      <Nav />
      {/* 메인 페이지 콘텐츠 */}
      <Footer />
    </div>
  );
}

export default MainPage;
