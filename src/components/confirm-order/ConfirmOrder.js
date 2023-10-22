import React, { useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./ConfirmOrder.css";
import removebuttongImg from "../../images/RemoveButton.png";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../store/orderStore"; // Zamijenite sa tačnom putanjom do vašeg orderSlice fajla
import { useEffect } from "react";
import deleteIcon from "../../images/delete.svg";
import CloseBtn from "../../images/close.svg";

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  const [quantity, setQuantity] = useState(1);
  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);

  useEffect(() => {
    if (orders && orders.length > 0) {
      setQuantity(orders[0].quantity);
    }
  }, [orders]);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const closeModal = () => {
    setRemoveModalVisible(false);
  };

  const closeBackdrop = () => {
    setRemoveModalVisible(false);
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    for (const order of orders) {
      totalCost += order.price * order.quantity;
    }
    return totalCost.toFixed(2);
  };

  const handleAddToOrder = (name, description, price) => {
    // Pravite objekat sa informacijama o narudžbini
    const orderInfo = {
      id: Math.random(), // Ovo je privremeno, možete koristiti bolju logiku za generisanje ID-a
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    };

    // Koristite dispatch da pozovete akciju i dodate narudžbinu u Redux store
    dispatch(addOrder(orderInfo));
    console.log(orderInfo);
  };

  useEffect(() => {
    if (orders && orders.length > 0) {
      setQuantity(orders[0].quantity);
    }
  }, [orders]);

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
        {orders.map((order) => (
          <div className="confirmorder-meal" key={order.id}>
            <div className="confirmorder-title-and-description">
              <p className="confirmorder-meal-title">{order.name}</p>
              <p className="confirmorder-meal-description">
                {order.description}
              </p>
            </div>
            <div className="confirmorder-price-and-counter">
              <div className="confirmorder-meal-price">
                {order.price * order.quantity}€
              </div>
              <div className="confirmorder-meal-counter">
                <img
                  src={quantity === 1 ? removebuttonrImg : removebuttongImg}
                  alt="removebutton"
                  className="counter-button-confirmorder"
                  onClick={() => {
                    if (quantity === 1) {
                      setRemoveModalVisible(true); // Otvori modal samo kada je quantity 1
                    } else {
                      decreaseQuantity();
                    }
                  }}
                />
                <h2 className="confirmorder-meal-quantity">{quantity}</h2>
                <img
                  src={quantity === 1 ? addbuttonrImg : addbuttongImg}
                  alt="addbutton"
                  className="counter-button-confirmorder"
                  onClick={() => {
                    if (quantity < 10) {
                      increaseQuantity();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="confirmorder-finalprice-and-description">
        <div className="confirmorder-meal-price-info">
          <p className="confirmorder-meals-price-title">Cost:</p>
          <p className="confirmorder-meals-price">{calculateTotalCost()}€</p>
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
        />
      </div>
      <div className="confirmorder-meals-button">
        <button className="primary-button">CONFIRM ORDER</button>
      </div>
      {isRemoveModalVisible && (
        <div
          className="confirmorder-meals-modal-backdrop"
          onClick={closeBackdrop}
        >
          <div className="confirmorder-meals-modal-wrapper">
            <div
              className="confirmorder-meals-modal"
              onClick={(e) => e.stopPropagation()}
            >
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
                By accepting this confirmation, your item will be removed from
                the order. Are you sure you want to remove this item?
              </p>
              <div className="confirmorder-meals-modal-button-container">
                <div
                  className="confirmorder-meals-modal-cancel-rectangle"
                  onClick={closeModal}
                >
                  <p className="confirmorder-meals-modal-cancel-text">Cancel</p>
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
