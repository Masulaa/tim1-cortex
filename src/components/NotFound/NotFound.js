import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./NotFound.css";
import ErrorImage from "../../images/404.png";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SearchOutlined } from "@mui/icons-material";
import profileIcon from "../../images/Ellipse 1.svg";
import logo from "../../images/logo.png";
import "../../style/global.css";

const NotFound = () => {

  const Dropdown = ({ isDropdownOpen, toggleDropdown }) => (
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <div className="options">
        <div className="option"  >Profile</div>
        <div className="option">Logout</div>
      </div>
    </div>
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };





  return (
    <div className="notFound-main">
      <div className="notFound-header"> <div className="notFound-topbar-computer--home">
          <div className="notFound-image-topbar-wrapper">
          <ArrowBackIcon className="notFound-arrowBack"></ArrowBackIcon>
            <img src={logo} alt="logo" className="image-topbar-home" />{" "}
          </div>
          <div className="notFound-topbar-computer-other-part">
            {" "}
            <div className="notFound-search-">
              <OutlinedInput className="notFound-search-input" placeholder="Search" />
              <SearchOutlined className="notFound-search-icon-choose-meal" />
            </div>{" "}
            <div className="notFound--shoopingbag">
              <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
            </div>
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
        </div>
      </div>
      <ArrowBackIosNew className="notFound-back-icon"></ArrowBackIosNew>
         <div className="notFound-error">ERROR</div>
            <img src={ErrorImage} className="notFound-error-image" />
          <div className="notFound-error-text">Page not found</div>
    </div>
  );
};

export default NotFound;
