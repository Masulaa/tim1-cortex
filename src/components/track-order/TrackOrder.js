import React, { useState, useEffect } from "react";
import "./TrackOrder.css";
import "../../style/global.css";
import { useNavigate } from "react-router-dom";

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
import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import { OrderService } from "../../api/api";

const TrackOrder = () => {
  const [activeStep] = useState(3);

  const [status, setStatus] = useState("")

  const navigate = useNavigate();

  const fetchOrder = async () => {
    try {
      const response = await OrderService.GetOrder();
      setStatus(response.data.state);
      console.log(response.data.state);
    } catch (error) {
      console.log("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="trackorder-main">
  <div className="trackorder-head">
    <Link to="/home">
        <ArrowBackIcon className="arrowBack-absolute2"></ArrowBackIcon>
        <ArrowBackIosNew className="back-icon-absolute"></ArrowBackIosNew>
        </Link>
        <p className="trackorder-title">YOUR ORDER</p>
      </div > 
      <div className="trackorder-content">
      <img src={tracklogo} alt="" className="trackorder-image"/>
      <div className="trackorder-steps">
          <div className="trackorder-first-step">
            <img
              src={status === "preparing" ? pan : panDeactive}
              className="order-preparation-icon"
              alt=""
            />
            <p
              className={`order-text-${
                status === "preparing" ? "active" : "deactive"
              }`}
            >
              Order in preparation
            </p>
            {status === "preparing" && <img src={selectedBtn} className="selected-icon" alt=""/>}
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
            src={status === "on_the_way" ? onTheWayActive : onTheWay}
            className="on-the-way-icon"
            alt=""
          />
          <p
            className={`order-text-${status === "on_the_way" ? "active" : "deactive"}`}
          >
            Order on the way
          </p>
          {status === "on_the_way" && <img src={selectedBtn} className="selected-icon" alt=""/>}
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
            src={status === "delivered" ? orderPackageActive : orderPackage}
            className="order-delivered-icon"
            alt=""
          />
          <p
            className={`order-text-${status === 3 ? "active" : "deactive"}`}
          >
            Order delivered
          </p>
          {status === "delivered" && <img src={orderCheck} className="order-check" alt=""/>}
        </div>
      </div>
      {status === "delivered" && (
        <div className="trackorder-button-wrap">
        <button className="primary-button" onClick={()=>{navigate("/RateOrder")}}>RATE ORDER</button>
        </div>
      )}</div>
    </div>
  );
};

export default TrackOrder;
