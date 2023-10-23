import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import profileIcon from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ArticleService } from "../../api/api";
import { useParams, useNavigate } from "react-router";
import { addOrder } from "../../store/orderStore";

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
  const [isDropdownOpenLeft, setIsDropdownOpenLeft] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [removeImage, setRemoveImage] = useState(removebuttongImg);
  const [addImage, setAddImage] = useState(addbuttonrImg);
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addedMeals = useSelector((state) => state.orders.addedMeals); // Koristite useSelector za dobavljanje objekta addedMeals

  const isMealAlreadyAdded = addedMeals[id] !== undefined; // Provjerite da li je obrok već dodan na osnovu ID-ja

  const handleAddToOrder = () => {
    const orderInfo = {
      id: article.id,
      name: article.name,
      price: article.price,
      description: article.description + article.ingredients,
      quantity: quantity,
    };
    dispatch(addOrder(orderInfo));
    navigate("/ChooseMeal");
  };

  const fetchArticles = async () => {
    try {
      const response = await ArticleService.GetSingleArticle(id);
      setArticle(response.data);
    } catch (error) {
      console.log("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
      </div>
      <div className="computer-only-content">
        <img src={backButton} className="back-button-orderMeal" alt="pizza" />
        <img src={pizzaImg} alt="pizza" className="img-layout-orderMeal" />
        <section className="texts-orderMeal">
          <div className="about-orderMeal">
            <h1 className="title-orderMeal">{article.name}</h1>
            <h2 className="price-orderMeal">{article.price}</h2>
          </div>
          <div className="description-orderMeal">
            {article.description} {article.ingredients}
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
            <button
              className={`disabled-btn ${!isMealAlreadyAdded ? "active" : ""}`}
              onClick={handleAddToOrder}
              disabled={isMealAlreadyAdded}
            >
              {isMealAlreadyAdded ? "ALREADY ADDED" : "ADD TO ORDER"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleMeal;
