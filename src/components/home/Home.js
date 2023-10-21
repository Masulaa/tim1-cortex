import "./Home.css";

import logo from "../../images/logo.png";
import icon from "../../images/8bb19757e48ed988259f35eab3822824.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import profileIcon from "../../images/Ellipse 1.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { AuthService } from "../../api/api";



const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleLogout = async () => {
    
    try {
      const success = await AuthService.logout();
      if(success){
      console.log("Logout succesfull");}
    } catch (error) {
      console.error("Error logout", error);
    }
  }
const Dropdown = ({ isDropdownOpen, toggleDropdown }) => (
  <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
    <div className="options">
      <div className="option" onClick={()=>{navigate("/MyProfile")}} >Profile</div>
      <div className="option" onClick={handleLogout}>Logout</div>
    </div>
  </div>
);
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
      <Dropdown isDropdownOpen={isDropdownOpen} />
          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <div className="options">
              <div className="option" onClick={()=>{navigate("/MyProfile")}}>Profile</div>
              <div className="option" onClick={handleLogout}>Logout</div>
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
