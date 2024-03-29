// src/pages/ClassPage.js
import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import ClassPostItem from "../components/ClassPostItem/ClassPostItem";
import Footer from "../components/Footer/Footer";
import "./style/classPage.css";

// Mock data for class posts
const mockClassPosts = [
  {
    id: 1,
    date: "08:01 MON",
    images: [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg",
      "/path/to/image3.jpg",
      "/path/to/image4.jpg",
      "/path/to/image5.jpg",
      "/path/to/image6.jpg",
    ],
    // ... other posts
  },
  // ... more mock posts
];

function ClassPage() {
  return (
    <div className="classPage">
      <div className="classPostsContainer">
        {mockClassPosts.map((post) => (
          <ClassPostItem key={post.id} date={post.date} images={post.images} />
        ))}
      </div>
    </div>
  );
}

export default ClassPage;
