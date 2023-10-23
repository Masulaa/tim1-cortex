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
import computerbutton from "../../images/icons/Group 23.png";
import CloseIcon from "@mui/icons-material/Close";
import darkCircle from "../../images/darkCircle.svg";
import { ArrowBackIosNew } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom/dist";

const icons = [
  { icon: MenuIcon, name: null },
  { icon: LocalPizzaOutlinedIcon, name: "Pizza" },
  { icon: LunchDiningOutlinedIcon, name: "Burger" },
  { icon: CookieOutlinedIcon, name: "Sweets" },
  { icon: BakeryDiningOutlinedIcon, name: "Breakfast" },
  { icon: SoupKitchenIcon, name: "Breakfast" },
  { icon: OutdoorGrillOutlinedIcon, name: "Grill" },
  { icon: SpaIcon, name: "Vegan" },
  { icon: LiquorOutlinedIcon, name: "Drink" },
  { icon: CoffeeMakerOutlinedIcon, name: "Coffee" },
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
  const [selectedCircles, setSelectedCircles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownLeft = () => {
    setIsDropdownOpenLeft(!isDropdownOpenLeft);
  };

  const navigate = useNavigate();

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
    document.querySelector(".choosemeal-menu").style.display = "block";
  };

  const handleClick = (index, name) => {
    if(selectedCategory==name){
      setSelectedCategory(null)
    }
    else if(name != null){setSelectedCategory(name)}
    
    if (index === 0) {
      toggleMenu();
      // Change src to darkcircle
    } else if (index > 0 && index < 12) {
      // Check if the circle is already selected
      if (selectedCircles.includes(index)) {
        // If selected, remove it from the array
        setSelectedCircles(selectedCircles.filter((item) => item !== index));
      } else {
        // If not selected, add it to the array
        setSelectedCircles([index]);
      }
    }
  };

  return (
    <div className="main-choosemeal">
      <div className="computer-only">
        <div className="topbar-computer-choosemeal-home">
          <div className="image-topbar-wrapper">
            <ArrowBackIcon
              className="arrowBack"
              onClick={() => {
                navigate(`/home`);
              }}
            ></ArrowBackIcon>
            <img src={logo} alt="logo" className="image-topbar-home" />{" "}
          </div>
          <div className="topbar-computer-other-part">
            {" "}
            <div className="search-choosemeal">
              <OutlinedInput className="search-input" placeholder="Search" />
              <SearchOutlined className="search-icon-choose-meal" />
            </div>{" "}
            <div className="choosemeal-shoopingbag" >
              <ShoppingBagOutlinedIcon style={{cursor:"pointer"}} onClick={()=>{navigate("/ConfirmOrder")}}></ShoppingBagOutlinedIcon>
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
        <img src={computerbutton} className="choosmeal-computer-button"
         onClick={() => {
          navigate(`/confirmorder`);
        }}></img>
      </div>
      <div className="phone-only">
        <div className="topbar-choosemeal-home">
          <div
            className="image-topbar-home-profile-with-dropdown"
            onClick={toggleDropdown}
          >
            <ArrowBackIosNew className="back-icon-absolute2" />
            <img
              src={profileIcon}
              alt="logo"
              className="image-topbar-home-profile"
            />
            {isDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}{" "}
          </div>
          <Dropdown isDropdownOpen={isDropdownOpen} />

          <div className="image-topbar-wrapper">
            <img src={logo} alt="logo" className="image-topbar-home" />{" "}
          </div>
          <div className="choosemeal-shoopingbag" onClick={()=>{navigate("/ConfirmOrder")}}>
            <ShoppingBagOutlinedIcon />
          </div>
        </div>{" "}
        <div className="search-choosemeal">
          <OutlinedInput className="search-input" placeholder="Search" />
          <SearchOutlined className="search-icon-choose-meal" />
        </div>
      </div>
      <div className="icon-row">
        {icons.map((data, index) => {let Icon=data.icon; return(
          <div
            className={`icon ${index === 0 ? "hidden" : ""}`}
            key={index}
            onClick={() => handleClick(index, data.name)}
          >
            <div className="choosemeal-circle">
              <img
                src={selectedCircles.includes(index) ? darkCircle : circle}
                alt="Circle"
                className="choosemeal-circle-icon"
              />
              <Icon
                className="inner-icon"
                style={{
                  color: selectedCircles.includes(index)
                    ? "darkred"
                    : "initial",
                }}
              />
            </div>
          </div>
        )})}
      </div>
      <div className="message-box">
        <div>
          <p>Orders can be accepted until 8:00 in the morning.</p>
          <p>
            After 9:00, the application will automatically block the possibility
            of ordering for that day.
          </p>
        </div>
        <div>
          <CloseIcon
            className="CloseIcon"
            onClick={function () {
              const messageBox = document.querySelector(".message-box");
              if (messageBox) {
                messageBox.style.transform = "scale(0)";
                setTimeout(() => {
                  messageBox.remove();
                }, 500);
              }
            }}
          ></CloseIcon>
        </div>
      </div>
      <div>
        <div className="choosemeal-recommend-title">Recommend</div>
        <div className="choosemeal-meals">
          {articles.map((article) => {
            if(selectedCategory){let show = false;
            article.tags.forEach(element => {
              if(element.name==selectedCategory){
                show=true;
              }
            });
            if(!show){
              return ;
            }
          }
            return(
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
                    onClick={() => {
                      navigate(`/ChooseMeal/SingleMeal/${article.id}`);
                    }}
                  ></img>
                </div>
              </div>
              <div className="line"></div>
            </div>
          )})}
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
