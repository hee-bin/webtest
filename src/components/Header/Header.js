import React from "react";

function Header() {
  return (
    <div
      className="
        text-center
        py-10 px-5
        w-full
        bg-gradient-to-l from-purple-300 to-pink-200
        rounded-lg
        shadow-2xl
      "
    >
      <h1
        className="
          text-6xl
          font-extrabold
          text-white
        "
      >
        AWESOME WIKI
      </h1>
    </div>
  );
}

export default Header;
