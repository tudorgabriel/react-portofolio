import React, { useContext } from "react";
import "../Hero/Hero.scss";
import { useNavigate } from "react-router-dom";

function Test() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div>
      <section>
        <video width="90%" height="80%" controls>
          <source
            src="https://video.asos-media.com/Navigation/_content_topman_desktop_mp4_564_720_2400k_25fps"
            type="video/mp4"
          ></source>{" "}
        </video>
      </section>
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
    </div>
  );
}

export default Test;
