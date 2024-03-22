import React, { useState } from "react";
import "./styles.css";
import bg from "../../assets/img/background2.jpg";
import fg from "../../assets/img/foreground.png";
import fg2 from "../../assets/img/Paraglide.png";

import Section from "../section/Sections";

import useIntersectionObserver from "../../hooks/useScrollAnimation";
import data from "./data";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // hook call for on scroll animation
  const { animationTriggered, ref } = useIntersectionObserver();

  return (
    <main
      onScroll={(e) => setScrollPosition(e.target.scrollTop)}
      style={{ maxHeight: "100vh" }}
      className={animationTriggered ? "perspective" : ""}
    >
      <div class="container">
        <img src={bg} alt="mountain " id="bg" />
        <img src={fg} alt="man " id="fg" />
        <img
          className={animationTriggered ? "animate-from-above" : ""}
          ref={ref}
          style={{
            transform: `translateX(${
              scrollPosition * 0.8
            }px) translateZ(-40px) scale(3)`,
            zIndex: -4,
            position: "absolute",
          }}
          src={fg2}
          alt="paragliding "
          id="fg2"
        />
        <h1 id="header">Exploration</h1>
      </div>

      {data.map((section, index) => {
        return (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            bgClass={section.bgClass}
            image1={section.img1}
            image2={section.img2}
            image3={section.img3}
            image4={section.img4}
          />
        );
      })}
    </main>
  );
};

export default Home;
