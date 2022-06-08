import React from "react";
import "../Hero/Hero.scss";
import { useNavigate } from "react-router-dom";

function Test() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div className="hero">
      <div className="h1-div">
        <h1 className="h1-text"> The best Test Store</h1>
      </div>
      <div className="btn-section">
        <button onClick={handleClick} className="btn">
          SHOP NOW{" "}
        </button>
      </div>
    </div>
  );
}

export default Test;
