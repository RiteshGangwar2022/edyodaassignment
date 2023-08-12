import React, { useState } from "react";
import "./right.css";
import Bottom from "./Bottom";

const Right = () => {
  const [cost, setcost] = useState("");

 // console.log(cost)
 

  return (
    <>
      <div className="inner">
        <div className="header">
          <div className="one">
            <h2>1</h2>
            <p style={{ margin: "0px" }}>SignUp</p>
          </div>
          <div className="one">
            <h2>2</h2>
            <p style={{ margin: "0px -5px" }}>Subscribe</p>
          </div>
        </div>
        <div className="mid">
          <form action="submit" method="Post">
            <h2>Select your Subscription plan</h2>
            <div style={{ backgroundColor: "#BEBEBE" }} className="container">
  
              <div className="heading">
                <input type="radio" name="price" className="rd" disabled  />
                <h3>12 Months Subscription</h3>
              </div>
              <div className="price">
                <h3>Total &#8377; 99</h3>
                <h3 style={{ fontSize: "13px", marginLeft: "25px" }}>
                  &#8377; 8/mo
                </h3>
              </div>
            </div>
            <div
               style={{ backgroundColor: "#90EE90" }}
              className="container"
              onClick={(e)=>setcost(12*179*8)}
            >
              <div className="heading">
                <input type="radio" name="price" className="rd" />
                <h3>12 Months Subscription</h3>
              </div>
              <div className="price">
                <h3>Total &#8377; 179</h3>
                <h3 style={{ fontSize: "13px", marginLeft: "25px" }}>
                  &#8377; 8/mo
                </h3>
              </div>
            </div>
            <div className="container"   onClick={(e)=>setcost(6*149*10)} >
              <div className="heading">
                <input type="radio" name="price" className="rd" />
                <h3>6 Months Subscription</h3>
              </div>
              <div className="price">
                <h3>Total &#8377; 149</h3>
                <h3 style={{ fontSize: "13px", marginLeft: "25px" }}>
                  &#8377; 25/mo
                </h3>
              </div>
            </div>
            <div className="container"   onClick={(e)=>setcost(3*99*33)} >
              <div className="heading">
                <input type="radio" name="price" className="rd" />
                <h3>3 Months Subscription</h3>
              </div>
              <div className="price">
                <h3>Total &#8377; 99</h3>
                <h3 style={{ fontSize: "13px", marginLeft: "25px" }}>
                  &#8377; 33/mo
                </h3>
              </div>
            </div>
          </form>
        </div>
        <hr width="100%" color="#BEBEBE" />
        <Bottom cost={cost} />
      </div>
    </>
  );
};

export default Right;
