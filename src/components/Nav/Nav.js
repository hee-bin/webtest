import React from "react";
import { Link } from "react-router-dom"; // react-router-dom에서 Link 컴포넌트를 import합니다.
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        {/* Link 컴포넌트를 사용하여 해당 경로로의 라우팅을 설정합니다. */}
        <li>
          <Link to="/class">화면공유</Link>
        </li>
        <li>
          <Link to="/job">자격증/취업</Link>
        </li>
        <li>
          <Link to="/free">필기공유</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
