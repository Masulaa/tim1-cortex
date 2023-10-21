import { ArrowBack } from '@mui/icons-material';
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
import { ArticleService } from "../../api/api";
import computerbutton from "../../images/icons/Group 23.png";

const NotFound = () => {
  const Dropdown = ({ isDropdownOpen, toggleDropdown }) => (
    <div className={`notFound-dropdown ${isDropdownOpen ? "open" : ""}`}>
      <div className="notFound-options">
        <div className="notFound-option">Profile</div>
        <div className="notFound-option">Track Order</div>
        <div className="notFound-option">Logout</div>
      </div>
    </div>
  );

  const DropdownLeft = ({ isDropdownOpenLeft, toggleDropdownLeft }) => (
    <div className={`notFound-dropdown1 ${isDropdownOpenLeft ? "open" : ""}`}>
      <div className="notFound-options">
        <div className="notFound-option">Profile</div>
        <div className="notFound-option">Track Order</div>
        <div className="notFound-option">Logout</div>
      </div>
    </div>
  );

  const [articles, setArticles] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenLeft, setIsDropdownOpenLeft] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownLeft = () => {
    setIsDropdownOpenLeft(!isDropdownOpenLeft);
  };

  const fetchArticles = async () => {
    try {
      const response = await ArticleService.GetArticles();
      setArticles(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleClick = (index) => {
    if (index === 0) {
      toggleMenu();
    }
  };

  return (
    <div className="notFound-main">
      <div className="notFound-header"> <div className="notFound-topbar-computer-choosemeal-home">
          <div className="notFound-image-topbar-wrapper">
          <ArrowBackIcon className="notFound-arrowBack"></ArrowBackIcon>
            <img src={logo} alt="logo" className="image-topbar-home" />{" "}
          </div>
          <div className="notFound-topbar-computer-other-part">
            {" "}
            <div className="notFound-search-choosemeal">
              <OutlinedInput className="notFound-search-input" placeholder="Search" />
              <SearchOutlined className="notFound-search-icon-choose-meal" />
            </div>{" "}
            <div className="notFound-choosemeal-shoopingbag">
              <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
            </div>
            <div
              className="notFound-image-topbar-home-profile-with-dropdown"
              onClick={toggleDropdownLeft}
            >
              <img
                src={profileIcon}
                alt="logo"
                className="notFound-image-topbar-home-profile"
              />
              {isDropdownOpenLeft ? <ExpandLessIcon /> : <ExpandMoreIcon />}{" "}
            </div>
            <DropdownLeft isDropdownOpenLeft={isDropdownOpenLeft} />
          </div>
        </div>
        <img src={computerbutton} className="notFound-choosmeal-computer-button"></img>
      </div>
      <ArrowBack className="notFound-back-icon"></ArrowBack>
         <div className="notFound-error">ERROR</div>
            <img src={ErrorImage} className="notFound-error-image" />
          <div className="notFound-error-text">Page not found</div>
    </div>
  );
};

export default NotFound;
