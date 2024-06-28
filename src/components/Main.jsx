import React, { useState, useEffect } from "react";
import "./Main.css";
import image from "../assets/img.webp";
import image_2 from "../assets/img_2.webp";
import image_3 from "../assets/img_3.webp";
import image_4 from "../assets/img_4.webp";
import AOS from 'aos'; 
import "aos/dist/aos.css";

const Main = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect (() =>{
    AOS.init({duration:1000});
  },[])

  return (
    <div className="main">
      <div data-aos="fade-down" data-aos-duration="2000">
        <div className="brands">
          <h1>we believe brands shape the</h1>
          <p>future</p>
        </div>
        <div className="right_main">
          <p>Selected projects</p>
          <pre>01 - 04</pre>
        </div>
      </div>
      <div className="images" data-aos="fade-left">
        <img
          src={image}
          onMouseEnter={() => handleMouseEnter(image)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={image_2}
          onMouseEnter={() => handleMouseEnter(image_2)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={image_3}
          onMouseEnter={() => handleMouseEnter(image_3)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={image_4}
          onMouseEnter={() => handleMouseEnter(image_4)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      {hoveredImage && (
        <div className="hovered-image" style={{ left: "60vh" }}>
          <img src={hoveredImage} alt="Hovered Image" data-aos="fade-right"/>
        </div>
      )}
    </div>
  );
};

export default Main;
