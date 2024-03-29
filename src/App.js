// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassPage from "./pages/ClassPage";
import JobPage from "./pages/JobPage";
import MainPage from "./pages/MainPage";
import UploadPage from "./pages/UploadPage";
import FreePage from "./pages/FreePage";
import Header from "./components/Header/Header"; // 가정: Header 컴포넌트가 있다고 가정함
import Nav from "./components/Nav/Nav"; // 가정: Nav 컴포넌트가 있다고 가정함
import Footer from "./components/Footer/Footer"; // 가정: Footer 컴포넌트가 있다고 가정함
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-container">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/class" element={<ClassPage />} />
            <Route path="/job" element={<JobPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/free" element={<FreePage />} />
            {/* 추가적인 라우트 설정 */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
