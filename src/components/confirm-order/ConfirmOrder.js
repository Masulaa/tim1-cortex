import React, { useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./ConfirmOrder.css";
import removebuttongImg from "../../images/RemoveButton.png";
import deleteIcon from "../../images/delete.svg";
import CloseBtn from "../../images/close.svg";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";

const ConfirmOrder = () => {
  const [quantities, setQuantities] = useState({
    pizzaCapricciosa: 1,
    pizzaMargherita: 1,
    pizzaDiavola: 1,
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);

  const increaseQuantity = (key) => {
    if (quantities[key] < 10) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [key]: prevQuantities[key] + 1,
      }));
    }
  };

  const decreaseQuantity = (key) => {
    if (quantities[key] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [key]: prevQuantities[key] - 1,
      }));
    } else {
      setSelectedProduct(key);
      setRemoveModalVisible(true);
    }
  };

  const closeModal = () => {
    setRemoveModalVisible(false);
  };

  const getAddButtonImage = (key) => {
    return quantities[key] === 10 ? addbuttongImg : addbuttonrImg;
  };

  const getRemoveButtonImage = (key) => {
    return quantities[key] === 1 ? removebuttonrImg : removebuttonrImg;
  };

  return (
    <div
      className={`main-confirmorder ${
        isRemoveModalVisible ? "modal-open" : ""
      }`}
    >
      <div className="confirmorder-head">
        <ArrowBackIosNew className="myprofile-back-icon"></ArrowBackIosNew>
        <p className="confirmorder-title">YOUR ORDER</p>
      </div>
      <div className="confirmorder-meals">
        <div className="confirmorder-meal">
          <div className="confirmorder-title-and-description">
            <p className="confirmorder-meal-title">Pizza Capricciosa</p>
            <p className="confirmorder-meal-description">
              Mozzarella cheese, baked ham, mushrooms, tomato
            </p>
          </div>
          <div className="confirmorder-price-and-counter">
            <div className="confirmorder-meal-price">22€</div>
            <div className="confirmorder-meal-counter">
              <img
                src={getRemoveButtonImage("pizzaCapricciosa")}
                alt="removebutton"
                className="counter-button-confirmorder"
                onClick={() => decreaseQuantity("pizzaCapricciosa")}
              />
              <h2 className="confirmorder-meal-quantity">
                {quantities.pizzaCapricciosa}
              </h2>
              <img
                src={getAddButtonImage("pizzaCapricciosa")}
                alt="addbutton"
                className="counter-button-confirmorder"
                onClick={() => increaseQuantity("pizzaCapricciosa")}
              />
            </div>
          </div>
        </div>
        <div className="confirmorder-meal">
          <div className="confirmorder-title-and-description">
            <p className="confirmorder-meal-title">Pizza Margherita</p>
            <p className="confirmorder-meal-description">
              Mozzarella cheese, tomato sauce, basil
            </p>
          </div>
          <div className="confirmorder-price-and-counter">
            <div className="confirmorder-meal-price">18€</div>
            <div className="confirmorder-meal-counter">
              <img
                src={getRemoveButtonImage("pizzaMargherita")}
                alt="removebutton"
                className="counter-button-confirmorder"
                onClick={() => decreaseQuantity("pizzaMargherita")}
              />
              <h2 className="confirmorder-meal-quantity">
                {quantities.pizzaMargherita}
              </h2>
              <img
                src={getAddButtonImage("pizzaMargherita")}
                alt="addbutton"
                className="counter-button-confirmorder"
                onClick={() => increaseQuantity("pizzaMargherita")}
              />
            </div>
          </div>
        </div>
        <div className="confirmorder-meal">
          <div className="confirmorder-title-and-description">
            <p className="confirmorder-meal-title">Pizza Diavola</p>
            <p className="confirmorder-meal-description">
              Spicy salami, mozzarella cheese, chili
            </p>
          </div>
          <div className="confirmorder-price-and-counter">
            <div className="confirmorder-meal-price">20€</div>
            <div className="confirmorder-meal-counter">
              <img
                src={getRemoveButtonImage("pizzaDiavola")}
                alt="removebutton"
                className="counter-button-confirmorder"
                onClick={() => decreaseQuantity("pizzaDiavola")}
              />
              <h2 className="confirmorder-meal-quantity">
                {quantities.pizzaDiavola}
              </h2>
              <img
                src={getAddButtonImage("pizzaDiavola")}
                alt="addbutton"
                className="counter-button-confirmorder"
                onClick={() => increaseQuantity("pizzaDiavola")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="confirmorder-finalprice-and-description">
        <div className="confirmorder-meal-price-info">
          <p className="confirmorder-meals-price-title">Cost:</p>
          <p className="confirmorder-meals-price">26.5€</p>
        </div>
        <p className="confirmorder-meals-price-description">
          *This is the price for your company; you don't pay anything for your
          meal.
        </p>
      </div>
      <div className="confirmorder-meals-description">
        <p className="confirmorder-meals-text-over-description">
          Do you have any requirements like allergy preferences?
        </p>
        <OutlinedInput
          maxRows={4}
          placeholder="Type"
          minRows={4}
          multiline
          style={{ width: "100%" }}
        ></OutlinedInput>
      </div>
      <div className="confirmorder-meals-button">
        <button className="primary-button">CONFIRM ORDER</button>
      </div>
      {isRemoveModalVisible && (
        <div className="confirmorder-meals-modal-backdrop">
          <div className="confirmorder-meals-modal-wrapper">
            <div className="confirmorder-meals-modal">
              <img
                src={CloseBtn}
                className="confirmorder-meals-modal-back-icon"
                onClick={closeModal}
                alt="Close"
              />
              <p className="confirmorder-meals-modal-title">Removing item</p>
              <div className="confirmorder-meal-modal-group-trash">
                <div className="confirmorder-meals-modal-rectangle-trash">
                  <img
                    src={deleteIcon}
                    className="confirmorder-meal-modal-trash-icon"
                    alt="Delete"
                  />
                </div>
              </div>
              <p className="confirmorder-meals-modal-description">
                By accepting this confirmation your item will be removed from
                the order. Are you sure you want to remove this item?
              </p>
              <div className="confirmorder-meals-modal-button-container">
                <div className="confirmorder-meals-modal-cancel-rectangle" 
                onClick={closeModal}
                >
                  <p
                    className="confirmorder-meals-modal-cancel-text"
                  >
                    Cancel
                  </p>
                </div>
                <div className="confirmorder-meals-modal-remove-rectangle">
                  <p className="confirmorder-meals-modal-remove-text">Remove</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmOrder;
