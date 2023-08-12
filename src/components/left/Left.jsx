import React from "react";
import "./left.css";
import content from "../../images/content.png";
import time from "../../images/time.png";
import ads from "../../images/ads.png";
import course from "../../images/course.png";
import live from "../../images/live.png";

const Left = () => {
  return (
    <>
      <div className="leftinner">
        <h2>Access Curated Courses Worth</h2>
        <h2>
          &#8377; <span style={{textDecoration:"line-through red"}}>18,500</span> at just
          <span style={{ color: "#0096FF" }}>&#8377; 99 </span>per year!
        </h2>
        {/*using ASCII code 8377 to get rupee sign*/}
        <div className="bottom">
          <div className="content">
            <img src={content} alt="content" />
            <h3>
              <span style={{ color: "#0096FF" }}>100+ </span> jobs relevant
              courses
            </h3>
          </div>
          <div className="content">
            <img src={time} alt="time" />
            <h3>
              <span style={{ color: "#0096FF" }}>20,000+ </span>Hours of content
            </h3>
          </div>
          <div className="content">
            <img src={live} alt="live" />
            <h3>
              <span style={{ color: "#0096FF" }}>Exclusive </span> webinar
              access
            </h3>
          </div>
          <div className="content">
            <img src={course} alt="live" />
            <h3>
              Scholorship worth{" "}
              <span style={{ color: "#0096FF" }}>&#8377; 94,500</span>
            </h3>
          </div>
          <div className="content">
            <img src={ads} alt="live" />
            <h3>
              <span style={{ color: "#0096FF" }}>Ad Free</span> learning
              Experience
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
