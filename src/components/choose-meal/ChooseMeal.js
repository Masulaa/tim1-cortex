import "./ChooseMeal.css";
import "../../style/global.css";
import profileIcon from "../../images/Ellipse 1.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../images/logo.png";
import React, { useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SearchOutlined } from "@mui/icons-material";

const ChooseMeal = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="main-choosemeal">
      <div className="topbar-home">
        {" "}
        <div
          className="image-topbar-home-profile-with-dropdown"
          onClick={toggleDropdown}
        >
          <img
            src={profileIcon}
            alt="logo"
            className="image-topbar-home-profile"
          />
          {isDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        {isDropdownOpen && (
          <div className="dropdown1">
            <div className="options1">
              <div className="option1">Profile</div>
              <div className="option1">Track Order</div>
              <div className="option1">Logout</div>
            </div>
          </div>
        )}
        <img src={logo} alt="logo" className="image-topbar-home" />{" "}
        <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
      </div>{" "}
      <OutlinedInput className="search-input" placeholder="Pretraži" />
      <SearchOutlined className="search-icon-choose-meal" />
    </div>
  );
};

export default ChooseMeal;
