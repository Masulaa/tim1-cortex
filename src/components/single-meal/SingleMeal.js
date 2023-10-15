import React, { useState } from "react";
import "./SingleMeal.css";
import "../../style/global.css";
import pizzaImg from "../../images/PizzaCapricciosa.png";
import removebuttongImg from "../../images/RemoveButton.png";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";
import backButton from "../../images/arrow_back_ios_new.svg";

const SingleMeal = () => {
  const [quantity, setQuantity] = useState(1);
  const [removeImage, setRemoveImage] = useState(removebuttongImg);
  const [addImage, setAddImage] = useState(addbuttonrImg);

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
    <img src={backButton} className="back-button-orderMeal" />
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
          <div className="addbutton-orderMeal">
            <h1 className="addbutton-text-orderMeal">ADD TO ORDER</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleMeal;