import React, { useEffect, useState } from "react";
import "./bottom.css";
import clock from "../../images/clock.png";
import razor from "../../images/razor.png";
const Bottom = ({ cost }) => {
  //console.log(cost);

  const [total, settotal] = useState("");

  const price = 18500;
  const newcost = price-cost;

  useEffect(() => {
    settotal(newcost);
  }, [cost]);

  return (
    <>
      <div className="last">
        <h4>
          Subscription Fee <span className="pr"> &#8377; 18,500</span>
        </h4>
        <div className="total">
          <img src={clock} alt="clock" className="img" />
          <h4>
            offer limited till 25 march 2023{" "}
            <span style={{ margin: "15px" }}> - &#8377;{cost}</span>
          </h4>
        </div>
        <h4>
          Total <span style={{ fontSize: "15px" }}>(incl. of 18% GST)</span>
          <span style={{ marginLeft: "110px" }}> &#8377; {total}</span>
        </h4>
        <div className="bottombtn">
          <div className="cancel">
            <button className="cabtn">Cancel</button>
          </div>
          <div className="proceed">
            <button className="prbtn">Proceed To Pay</button>
          </div>
        </div>
        <img src={razor} alt="razorpay" className="bottomimg" />
      </div>
    </>
  );
};

export default Bottom;
