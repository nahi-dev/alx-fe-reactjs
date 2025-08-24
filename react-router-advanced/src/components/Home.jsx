// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <Link to="/profile">Profile</Link> | <Link to="/posts/1">Post 1</Link>
    </nav>
  </div>
);

export default Home;
