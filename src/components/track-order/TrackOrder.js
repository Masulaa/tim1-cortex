import React, { useState } from "react";
import "./TrackOrder.css";
import "../../style/global.css";

import selectedBtn from "../../images/keyboard_backspace.svg";
import tracklogo from "../../images/trackorderlogo.png";
import onTheWay from "../../images/local_shipping.svg";
import onTheWayActive from "../../images/local_shippingactive.svg";
import pan from "../../images/skillet.svg";
import panDeactive from "../../images/pandeactive.svg";
import orderPackage from "../../images/package_2.svg";
import orderPackageActive from "../../images/packageactive.svg";
import orderCircle from "../../images/Ellipse 12.svg";
import orderCheck from "../../images/ordercheck.svg";
import { ArrowBackIosNew } from "@mui/icons-material";

const TrackOrder = () => {
  const [activeStep] = useState(3);

  return (
    <div className="trackorder-main">
  <div className="trackorder-head">
        <ArrowBackIosNew className="trackorder-back-icon"></ArrowBackIosNew>
        <p className="trackorder-title">YOUR ORDER</p>
      </div > 
      <div className="trackorder-content">
      <img src={tracklogo} alt="" className="trackorder-image"/>
      <div className="trackorder-steps">
          <div className="trackorder-first-step">
            <img
              src={activeStep === 1 ? pan : panDeactive}
              className="order-preparation-icon"
              alt=""
            />
            <p
              className={`order-text-${
                activeStep === 1 ? "active" : "deactive"
              }`}
            >
              Order in preparation
            </p>
            {activeStep === 1 && <img src={selectedBtn} className="selected-icon" alt=""/>}
          </div>
        <div className="circle-space">
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
        </div>
        <div className="trackorder-first-step">
          <img
            src={activeStep === 2 ? onTheWayActive : onTheWay}
            className="on-the-way-icon"
            alt=""
          />
          <p
            className={`order-text-${activeStep === 2 ? "active" : "deactive"}`}
          >
            Order on the way
          </p>
          {activeStep === 2 && <img src={selectedBtn} className="selected-icon" alt=""/>}
        </div>
        <div className="circle-space">
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
          <img src={orderCircle} className="circle" alt=""/>
        </div>
        <div className="trackorder-first-step">
          <img
            src={activeStep === 3 ? orderPackageActive : orderPackage}
            className="order-delivered-icon"
            alt=""
          />
          <p
            className={`order-text-${activeStep === 3 ? "active" : "deactive"}`}
          >
            Order delivered
          </p>
          {activeStep === 3 && <img src={orderCheck} className="order-check" alt=""/>}
        </div>
      </div>
      {activeStep === 3 && (
        <div className="trackorder-button-wrap">
        <button className="primary-button">RATE ORDER</button>
        </div>
      )}</div>
    </div>
  );
};

export default TrackOrder;
