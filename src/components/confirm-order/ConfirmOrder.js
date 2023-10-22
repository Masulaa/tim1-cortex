import React, { useState, useEffect } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./ConfirmOrder.css";
import removebuttongImg from "../../images/RemoveButton.png";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";
import deleteBtn from "../../images/delete.svg"
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../store/orderStore";
import CloseBtn from "../../images/close.svg";
import { OrderService } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { updateOrder } from "../../store/orderStore";


const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const [expiresOn, setExpiresOn] = useState("");
  const [comment, setComment] = useState("");
  const [articles, setArticles] = useState([]);

  const createOrderData = () => {
    const orderArticles = orders.map((order) => ({
      article_id: order.id,
      count: order.quantity,
    }));

    return {
      comment: comment,
      articles: orderArticles,
    };
  };

  useEffect(() => {
    if (orders && orders.length > 0) {
      setQuantity(orders[0].quantity);
    }
  }, [orders]);



  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      updateTotalCost(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity === 1) {
      setRemoveModalVisible(true);
    } else {
      setQuantity(quantity - 1);
      updateTotalCost(quantity - 1);
    }
  };

  
  const updateTotalCost = (newQuantity) => {
    const updatedOrders = orders.map((order) => {
      if (order.quantity === quantity) {
        return { ...order, quantity: newQuantity };
      }
      return order;
    });
    
  
    let newTotalCost = 0;
    for (const order of updatedOrders) {
      const { price, quantity } = order;
      const productPrice = price * quantity;
      newTotalCost += productPrice;
    }
    setTotalCost(newTotalCost);
  };
  const closeModal = () => {
    setRemoveModalVisible(false);
  };

  const closeBackdrop = () => {
    setRemoveModalVisible(false);
  };

  const getAddButtonImage = () => {
    return quantity === 10 ? addbuttongImg : addbuttonrImg;
  };

  const getRemoveButtonImage = () => {
    return quantity === 1 ? removebuttonrImg : removebuttonrImg;
  };

  const handleAddToOrder = (name, description, price) => {
    const orderInfo = {
      id: Math.random(), 
      name: name,
      description: description,
      price: price,
      quantity: quantity, 
    };
    dispatch(addOrder(orderInfo));
    console.log(orderInfo);
    setTotalCost((prevTotalCost) => prevTotalCost + price * quantity);
  };

  const postOrder = async () => {
    try {
      const orderData = createOrderData();
      const response = await OrderService.PostOrder(orderData);
      console.log("API Response", response);
      navigate("/OrderSent");
    } catch (error) {
      console.log("Error posting order:", error);
    }
  };

  return (
    <div className={`main-confirmorder ${isRemoveModalVisible ? "modal-open" : ""}`}>
      <div className="confirmorder-head">
        <ArrowBackIosNew className="myprofile-back-icon" />
        <p className="confirmorder-title">YOUR ORDER</p>
      </div>
      <div className="confirmorder-meals">
        {orders.map((order) => (
          <div className="confirmorder-meal" key={order.id}>
            <div className="confirmorder-title-and-description">
              <p className="confirmorder-meal-title">{order.name}</p>
              <p className="confirmorder-meal-description">{order.description}</p>
            </div>
            <div className="confirmorder-price-and-counter">
              <div className="confirmorder-meal-price">
                {order.price * order.quantity}€
              </div>
              <div className="confirmorder-meal-counter">
                <img
                  src={getRemoveButtonImage()}
                  alt="removebutton"
                  className="counter-button-confirmorder"
                  onClick={decreaseQuantity}
                />
                <h2 className="confirmorder-meal-quantity">{quantity}</h2>
                <img
                  src={getAddButtonImage()}
                  alt="addbutton"
                  className="counter-button-confirmorder"
                  onClick={increaseQuantity}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="confirmorder-finalprice-and-description">
        <div className="confirmorder-meal-price-info">
          <p className="confirmorder-meals-price-title">Cost:</p>
          <p className="confirmorder-meals-price">
            {totalCost.toFixed(2)}€
          </p>
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
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </div>
      <div className="confirmorder-meals-button">
        <button className="primary-button" onClick={postOrder}>
          CONFIRM ORDER
        </button>
      </div>
      {isRemoveModalVisible && (
        <div className="confirmorder-meals-modal-backdrop" onClick={closeBackdrop}>
          <div className="confirmorder-meals-modal-wrapper">
            <div className="confirmorder-meals-modal" onClick={(e) => e.stopPropagation()}>
              <img
                src={CloseBtn}
                className="confirmorder-meals-modal-back-icon"
                onClick={closeModal}
                alt="Close"
              />
              <p className="confirmorder-meals-modal-title">Removing item</p>
              <div className="confirmorder-meal-modal-group-trash">
                <div className="confirmorder-meals-modal-rectangle-trash">
                  <img src={deleteBtn} className="confirmorder-meal-modal-trash-icon" alt="Delete" />
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