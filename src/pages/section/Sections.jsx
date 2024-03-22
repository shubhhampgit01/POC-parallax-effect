import React, { useState } from "react";
import useIntersectionObserver from "../../hooks/useScrollAnimation";
import img1 from "../../assets/img/bg1.jpg";
import "./styles.css";
import "./animations.css";
const Section = ({
  title,
  content,
  bgClass,
  image1,
  image2,
  image3,
  image4,
}) => {
  const { animationTriggered: animateHeader, ref: refHeader } =
    useIntersectionObserver();
  const { animationTriggered: animateContent, ref: refContent } =
    useIntersectionObserver();

  const { animationTriggered: animateLeftTop, ref: refLeftTop } =
    useIntersectionObserver();
  const { animationTriggered: animateLeftBottom, ref: refLeftBottom } =
    useIntersectionObserver();
  const { animationTriggered: animateRightTop, ref: refRightTop } =
    useIntersectionObserver();
  const { animationTriggered: animateRightBottom, ref: refRightBottom } =
    useIntersectionObserver();

  return (
    <section>
      <div className={`box ${bgClass}`}>
        <h4 ref={refHeader} className={animateHeader ? "animate-text" : ""}>
          {title}
        </h4>
      </div>

      <div className="contentContainer">
        <div className="contentLeft">
          <img
            ref={refLeftTop}
            className={
              animateLeftTop ? "animateFromTopLeft singleImage" : "singleImage"
            }
            alt="img"
            src={image1}
          />
          <img
            ref={refLeftBottom}
            className={
              animateLeftBottom
                ? "animateFromBottomLeft singleImage"
                : "singleImage"
            }
            alt="img"
            src={image2}
          />
        </div>
        <p
          ref={refContent}
          className={animateContent ? "animateContent content" : "content"}
        >
          {content}
        </p>
        <div className="contentLeft">
          <img
            ref={refRightTop}
            className={
              animateRightTop
                ? "animateFromTopRight singleImage"
                : "singleImage"
            }
            alt="img"
            src={image3}
          />
          <img
            ref={refRightBottom}
            className={
              animateRightBottom
                ? "animateFromBottomRight singleImage"
                : "singleImage"
            }
            alt="img"
            src={image4}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
