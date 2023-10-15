import "./Home.css";

import logo from "../../images/logo.png";
import icon from "../../images/8bb19757e48ed988259f35eab3822824.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import profileIcon from "../../images/Ellipse 1.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  

  return (
    <>
      <div className="img" alt="img"></div>
      <div className="main1">
        <div className="topbar-home">
          <img src={logo} alt="logo" className="image-topbar-home" />
          <div
            className="image-topbar-home-profile-with-dropdown"
            onClick={toggleDropdown}
          >
            <img src={profileIcon} alt="logo" className="image-topbar-home-profile" />
            {isDropdownOpen ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <div className="options">
              <div className="option">Profile</div>
              <div className="option">Track Order</div>
              <div className="option">Logout</div>
            </div>
          </div>
        )}
        <div className="content-home">
          <div className="first-part-of-content-home">
            <img src={icon} alt="icon" className="img1-home" />
            <div className="title-home">I’m ordering for:</div>
          </div>
          <div className="second-part-of-content-home">
            <button className="primary-button">TODAY</button>
            <button className="secondary-button">WHOLE WEEK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
