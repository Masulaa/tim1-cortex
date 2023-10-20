import "./ChooseMeal.css";
import "../../style/global.css";
import profileIcon from "../../images/Ellipse 1.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../images/logo.png";
import React, { useState,  useEffect } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SearchOutlined } from "@mui/icons-material";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import addbuttongImg from "../../images/AddButton.png";
import pizzaImg from "../../images/PizzaCapricciosa.png";
import { ArticleService } from "../../api/api";

const Dropdown = ({ isDropdownOpen, toggleDropdown }) => (
  <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
    <div className="options">
      <div className="option">Profile</div>
      <div className="option">Track Order</div>
      <div className="option">Logout</div>
    </div>
  </div>
);
const ChooseMeal = () => {
  const [articles,setArticles]=useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchArticles = async () => {
    try {
      const response = await ArticleService.GetArticles();
      setArticles(response.data);
    } catch (error) {
      console.log("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="main-choosemeal">
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
        <img src={logo} alt="logo" className="image-topbar-home" />{" "}
        <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
      </div>{" "}
      <OutlinedInput className="search-input" placeholder="Pretraži" />
      <SearchOutlined className="search-icon-choose-meal" />
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
                  {article.description}
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
      <div className="choosemeal-menu">
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
              <LunchDiningOutlinedIcon></LunchDiningOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Burger</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <CookieOutlinedIcon></CookieOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Sweets</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <BakeryDiningOutlinedIcon></BakeryDiningOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Breakfast</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <LunchDiningOutlinedIcon></LunchDiningOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Cooked</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <OutdoorGrillOutlinedIcon></OutdoorGrillOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Grill</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <BakeryDiningOutlinedIcon></BakeryDiningOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Vegan</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <LunchDiningOutlinedIcon></LunchDiningOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Drink</div>
          </div>
          <div className="choosemeal-categories-single">
            <div className="choosemeal-categories-icon">
              <CoffeeMakerOutlinedIcon></CoffeeMakerOutlinedIcon>
            </div>
            <div className="choosemeal-categories-text">Coffe</div>
          </div>
        </div>
        <div className="choosemeal-menu-apply-button">
          <button className="primary-button">APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseMeal;
