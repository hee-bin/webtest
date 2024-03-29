// src/components/ClassPostItem/ClassPostItem.js
import React from "react";
import "./ClassPostItem.css";

function ClassPostItem({ date, images }) {
  return (
    <div className="classPostItem">
      <div className="postDate">{date}</div>
      <div className="postImages">
        {images.map((image, index) => (
          <div key={index} className="postImage">
            <img src={image} alt={`Class Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassPostItem;
