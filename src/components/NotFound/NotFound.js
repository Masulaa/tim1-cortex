import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./NotFound.css";
import ErrorImage from "../../images/404.png";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SearchOutlined } from "@mui/icons-material";
import profileIcon from "../../images/Ellipse 1.svg";
import logo from "../../images/logo.png";
import "../../style/global.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  return (
    <div className="notFound-main">
      <div className="notFound-header"> <div className="notFound-topbar-computer--home">
          <div className="notFound-image-topbar-wrapper">
            <Link to="/home">
          <ArrowBackIcon className="notFound-arrowBack"></ArrowBackIcon>
          </Link>
          </div>
        </div>
      </div>
      <ArrowBackIosNew className="notFound-back-icon"></ArrowBackIosNew>
         <div className="notFound-error">ERROR</div>
            <img src={ErrorImage} className="notFound-error-image" alt="Error 404"/>
          <div className="notFound-error-text">Page not found</div>
    </div>
  );
};

export default NotFound;
