import React, { useState } from "react";
import "../../style/global.css";
import "./OrderSent.css";
import close from "../../images/close.svg";
import check from "../../images/check.svg";
import orderS from "../../images/OrderS.png";
import { useNavigate } from "react-router-dom";


const OrderSent = () => {



    const navigate = useNavigate();




    return (
        <div className="main-order-sent">
            <div className="closebutton">
                <img src={close} alt="" className="closeicon" />
            </div>
            <div className="order-sent-content-main">
                <div className="order-sent-content">
                    <img src={orderS} alt="" className="order-sent-img" />
                    <div className="order-sent-texts">
                        <div className="order-sent-title">
                            <img src={check} alt="" className="check" />
                            <h1 className="order-sent">Order sent</h1>
                        </div>
                        <p className="track-order-text" style={{cursor:"pointer"}} onClick={()=>{navigate("/TrackOrder")}}>Track order</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSent;
