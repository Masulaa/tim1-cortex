import React, { useState } from "react";
import "./SingleMeal.css";
import "../../style/global.css";
import pizzaImg from "../../images/PizzaCapricciosa.png";
import removebuttongImg from "../../images/RemoveButton.png";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";
import backButton from "../../images/arrow_back_ios_new.svg";
import logo from "../../images/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SearchOutlined } from "@mui/icons-material";
import profileIcon from "../../images/Ellipse 1.svg";
import computerbutton from "../../images/icons/Group 23.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Dropdown = ({ isDropdownOpen, toggleDropdown }) => (
  <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
    <div className="options">
      <div className="option">Profile</div>
      <div className="option">Track Order</div>
      <div className="option">Logout</div>
    </div>
  </div>
);
{
  /*Left je zapravo Right*/
}
const DropdownLeft = ({ isDropdownOpenLeft, toggleDropdownLeft }) => (
  <div className={`dropdown1 ${isDropdownOpenLeft ? "open" : ""}`}>
    <div className="options">
      <div className="option">Profile</div>
      <div className="option">Track Order</div>
      <div className="option">Logout</div>
    </div>
  </div>
);

const SingleMeal = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenLeft, setIsDropdownOpenLeft] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [removeImage, setRemoveImage] = useState(removebuttongImg);
  const [addImage, setAddImage] = useState(addbuttonrImg);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownLeft = () => {
    setIsDropdownOpenLeft(!isDropdownOpenLeft);
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      if (quantity === 9) {
        setAddImage(addbuttongImg);
      }
      if (quantity === 1) {
        setRemoveImage(removebuttonrImg);
      }
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (quantity === 2) {
        setRemoveImage(removebuttongImg);
      }
      if (quantity === 10) {
        setAddImage(addbuttonrImg);
      }
    }
  };

  return (
    <div className="main-orderMeal">
            <div className="computer-only">
        <div className="topbar-computer-choosemeal-home">
          <div className="image-topbar-wrapper">
            <img src={logo} alt="logo" className="image-topbar-home" />{" "}
          </div>
          <div className="topbar-computer-other-part">
            {" "}
            <div className="search-choosemeal">
              <OutlinedInput className="search-input" placeholder="Search" />
              <SearchOutlined className="search-icon-choose-meal" />
            </div>{" "}
            <div className="choosemeal-shoopingbag">
              <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
            </div>
            <div
              className="image-topbar-home-profile-with-dropdown"
              onClick={toggleDropdownLeft}
            >
              <img
                src={profileIcon}
                alt="logo"
                className="image-topbar-home-profile"
              />
              {isDropdownOpenLeft ? <ExpandLessIcon /> : <ExpandMoreIcon />}{" "}
            </div>
            <DropdownLeft isDropdownOpenLeft={isDropdownOpenLeft} />
          </div>
        </div>
        <img src={computerbutton} className="choosmeal-computer-button"></img>
      </div>
      <div className="computer-only-content">
      <img src={backButton} className="back-button-orderMeal" alt="pizza" />
      <img src={pizzaImg} alt="pizza" className="img-layout-orderMeal" />
      <section className="texts-orderMeal">
        <div className="about-orderMeal">
          <h1 className="title-orderMeal">Pizza Capricciosa</h1>
          <h2 className="price-orderMeal">11$</h2>
        </div>
        <div className="description-orderMeal">
          Indulge in the classic perfection of Pizza Capricciosa—melted
          mozzarella, savory ham, mushrooms, and zesty tomato sauce. An Italian
          delight in every bite!
        </div>
      </section>
      <section className="tmp-orderMeal">
        <div className="counter-orderMeal">
          <img
            src={removeImage}
            alt="removebutton"
            className="counter-button-orderMeal"
            onClick={decreaseQuantity}
          />
          <h2>{quantity}</h2>
          <img
            src={addImage}
            alt="addbutton"
            className="counter-button-orderMeal"
            onClick={increaseQuantity}
          />
        </div>
        <div className="button-wrapper-orderMeal">
          <button className="addbutton-text-orderMeal addbutton-orderMeal">
            ADD TO ORDER
          </button>
        </div>
      </section>
    </div>
    </div>

  );
};

export default SingleMeal;
