import React from "react";
import { Link } from "react-router-dom";

import Routes from "./routes";

export default function BasicExample() {
  return (
    <Routes>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
      </div>
    </Routes>
  );
}
