import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchenOutlined";
import SpaIcon from "@mui/icons-material/SpaOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SearchOutlined } from "@mui/icons-material";
import profileIcon from "../../images/Ellipse 1.svg";
import circle from "../../images/Ellipse 2.svg";
import logo from "../../images/logo.png";
import "./ChooseMeal.css";
import "../../style/global.css";
import { ArticleService } from "../../api/api";
import addbuttongImg from "../../images/AddButton.png";
import pizzaImg from "../../images/PizzaCapricciosa.png";
import computerbutton from "../../images/icons/Group 23.png"

const icons = [
  MenuIcon,
  LocalPizzaOutlinedIcon,
  LunchDiningOutlinedIcon,
  CookieOutlinedIcon,
  BakeryDiningOutlinedIcon,
  SoupKitchenIcon,
  OutdoorGrillOutlinedIcon,
  SpaIcon,
  LiquorOutlinedIcon,
  CoffeeMakerOutlinedIcon,
  EmojiFoodBeverageOutlinedIcon,
];

const Dropdown = ({ isDropdownOpen, toggleDropdown }) => (
  <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
    <div className="options">
      <div className="option">Profile</div>
      <div className="option">Track Order</div>
      <div className="option">Logout</div>
    </div>
  </div>
);

const DropdownLeft = ({ isDropdownOpenLeft, toggleDropdownLeft }) => (
  <div className={`dropdown1 ${isDropdownOpenLeft ? "open" : ""}`}>
    <div className="options">
      <div className="option">Profile</div>
      <div className="option">Track Order</div>
      <div className="option">Logout</div>
    </div>
  </div>
);

const ChooseMeal = () => {
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
    <div className="main-choosemeal">
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
      <div className="phone-only">
        <div className="topbar-choosemeal-home">
          <div
            className="image-topbar-home-profile-with-dropdown"
            onClick={toggleDropdown}
          >
            <img
              src={profileIcon}
              alt="logo"
              className="image-topbar-home-profile"
            />
            {isDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}{" "}
          </div>
          <Dropdown isDropdownOpen={isDropdownOpen} />
          <div className="choosemeal-shoopingbag">
            <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
          </div>
          <div className="image-topbar-wrapper">
            <img src={logo} alt="logo" className="image-topbar-home" />{" "}
          </div>
        </div>{" "}
        <div className="search-choosemeal">
          <OutlinedInput className="search-input" placeholder="Search" />
          <SearchOutlined className="search-icon-choose-meal" />
        </div>
      </div>
      <div className="icon-row">
        {icons.map((Icon, index) => (
          <div className="icon" key={index} onClick={() => handleClick(index)}>
            <div className="circle">
              <img src={circle} alt="Circle" className="circle-icon" />
              <Icon className="inner-icon" />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="choosemeal-recommend-title">Recommend</div>
        <div className="choosemeal-meals">
          {articles.map((article) => (
            <div key={article.id} className="choosemeal-single-meal">
              <div className="choosemeal-single-info">
                <div className="choosemeal-first-part-meal-info">
                  <img
                    src={pizzaImg}
                    alt=""
                    className="choosemeal-meal-img"
                  ></img>
                  <div className="choosemeal-meal-title-and-description">
                    <p className="choosemeal-meal-title">{article.name}</p>
                    <p className="choosemeal-meal-description">
                      {article.ingredients}
                    </p>
                  </div>
                </div>
                <div className="choosemeal-second-part-meal-info">
                  <p className="choosemeal-meal-price">{article.price}€</p>
                  <img
                    src={addbuttongImg}
                    alt=""
                    className="choosemeal-meal-add-button"
                  ></img>
                </div>
              </div>
              <div className="line"></div>
            </div>
          ))}
        </div>
      </div>
      {
        <div
          className={`${isMenuVisible ? "overlay-visible" : "overlay-hidden"}`}
          onClick={toggleMenu}
        ></div>
      }
      <div
        className={`choosemeal-menu ${
          isMenuVisible ? "menu-visible" : "menu-hidden"
        }`}
      >
        <p className="choosemeal-title-menu">Menu</p>
        <div className="choosemeal-categories-menu">
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <LocalPizzaOutlinedIcon></LocalPizzaOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Pizza</div>
          </div>

          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <CookieOutlinedIcon></CookieOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Burger</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <BakeryDiningOutlinedIcon></BakeryDiningOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Sweets</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <OutdoorGrillOutlinedIcon></OutdoorGrillOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Breakfast</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <SoupKitchenIcon></SoupKitchenIcon>
            </div>
            <div className="choosemeal-categories-text">Cooked</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <SpaIcon></SpaIcon>
            </div>
            <div className="choosemeal-categories-text">Grill</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <LiquorOutlinedIcon></LiquorOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Vegan</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <CoffeeMakerOutlinedIcon></CoffeeMakerOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Drink</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <EmojiFoodBeverageOutlinedIcon></EmojiFoodBeverageOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Cofee</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Tea</div>
          </div>
        </div>
        <div className="choosemeal-menu-apply-button">
          <button className="choosemeal-menu-apply">APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseMeal;
