import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <div>Home</div>
    </div>
  );
};

export default HomePage;
