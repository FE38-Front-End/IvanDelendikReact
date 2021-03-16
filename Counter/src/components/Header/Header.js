import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Counter">Counter</Link>
        </li>
        <li>
          <Link to="/Converter">Converter</Link>
        </li>
      </ul>
    </nav>
  );
}
