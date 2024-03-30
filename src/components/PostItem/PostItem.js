// components/PostItem.js
import React from "react";

function PostItem({ id, title, author, date, content, image, onClick }) {
  const truncateContent = (text, maxLength = 3) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div
      onClick={() => onClick(id)}
      className="cursor-pointer p-5 shadow-md border rounded-lg overflow-hidden bg-white my-2 transition-all duration-200 ease-in-out hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center">
          <p className="font-semibold mr-4">{author}</p>
          <p className="text-sm">{date}</p>
        </div>
      </div>
      {image && (
        <img
          src={image}
          alt="Post image"
          className="w-full h-auto mb-4 max-h-40 object-cover"
        />
      )}
      <p>{truncateContent(content)}</p>
    </div>
  );
}

export default PostItem;
