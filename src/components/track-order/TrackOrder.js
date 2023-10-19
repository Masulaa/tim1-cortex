import React, { useState} from "react";
import "./TrackOrder.css";
import "../../style/global.css"

import backBtn from "../../images/backarrow.svg";
import selectedBtn from "../../images/keyboard_backspace.svg"; 
import tracklogo from "../../images/trackorderlogo.png";
import onTheWay from "../../images/local_shipping.svg";
import onTheWayActive from "../../images/local_shippingactive.svg";
import pan from "../../images/skillet.svg";
import panDeactive from "../../images/pandeactive.svg";
import orderPackage from "../../images/package_2.svg";
import orderPackageActive from "../../images/packageactive.svg"
import orderCircle from "../../images/Ellipse 12.svg";
import orderCheck from "../../images/ordercheck.svg";

const TrackOrder = () => {
    const [activeStep, setActiveStep] = useState(3);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    return (
        <div className="track-order-main">
        <div className="backbtn-ram">
            <img src={backBtn} className="back-button-track" />
        </div>
        <h1 className="track-order-title">Track order</h1>
        <img src={tracklogo} className="track-order-logo" />
        <div className="track-order-icons">
            <div className="track-order-preparation">
            <div className="order-preparation">
                        <img src={activeStep === 1 ? pan : panDeactive} className="order-preparation-icon" />
                        <p className={`order-preparation-text-${activeStep === 1 ? 'active' : 'deactive'}`}>Order in preparation</p>
                        {activeStep === 1 && <img src={selectedBtn} className="selected-icon" />}
                    </div>
        
        </div>
        <div className="circle-space">
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
        </div>
        <div className="track-order-on-the-way">
                        <img src={activeStep === 2 ? onTheWayActive : onTheWay} className="on-the-way-icon" />
                        <p className={`on-the-way-text-${activeStep === 2 ? 'active' : 'deactive'}`}>Order on the way</p>
                        {activeStep === 2 && <img src={selectedBtn} className="selected-icon" />}
                </div>
        <div className="circle-space">
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
            <img src={orderCircle} className="circle" />
        </div>
        <div className="track-order-delivered">
                        <img src={activeStep === 3 ? orderPackageActive : orderPackage} className="order-delivered-icon" />
                        <p className={`order-delivered-text-${activeStep === 3 ? 'active' : 'deactive'}`}>Order delivered</p>
                        {activeStep === 3 && <img src={orderCheck} className="order-check" />}
                </div>
        </div>
        {activeStep === 3 && (
                <div className="rate-order-button">
                    <div className="rate-order-group">
                        <div className="rate-order-rectangle">
                        <h1 className="rate-order-text">Rate order</h1>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default TrackOrder;