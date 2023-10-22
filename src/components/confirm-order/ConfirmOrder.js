import React, { useState, useEffect } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./ConfirmOrder.css";
import removebuttongImg from "../../images/RemoveButton.png";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";
import deleteBtn from "../../images/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../store/orderStore";
import CloseBtn from "../../images/close.svg";
import { OrderService } from "../../api/api";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  const navigate = useNavigate();

  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);

  const [expiresOn, setExpiresOn] = useState("2023-10-23");
  const [comment, setComment] = useState(""); // Inicijalizovan prazan string
  const [articles, setArticles] = useState([
    {
      id: 1,
      name: "Dummy Article 1",
      description: "Description 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: "Dummy Article 2",
      description: "Description 2",
      price: 15,
      quantity: 1,
    },
  ]);

  const createOrderData = () => {
    const orderArticles = articles.map((article) => ({
      article_id: article.id,
      count: article.quantity,
    }));

    return {
      expires_on: expiresOn,
      comment: comment,
      articles: orderArticles,
    };
  };

  const updateTotalCost = () => {
    let newTotalCost = 0;

    for (const article of articles) {
      const { price, quantity } = article;
      const productPrice = price * quantity;
      newTotalCost += productPrice;
    }

    return newTotalCost; // Vraća novi trošak
  };

  const increaseQuantity = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return { ...article, quantity: Math.min(10, article.quantity + 1) };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  const decreaseQuantity = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        const newQuantity = Math.max(1, article.quantity - 1);
        if (newQuantity === 1) {
          setRemoveModalVisible(true);
        }
        return { ...article, quantity: newQuantity };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  const closeModal = () => {
    setRemoveModalVisible(false);
  };

  const closeBackdrop = () => {
    setRemoveModalVisible(false);
  };

  const postOrder = async () => {
    try {
      const orderData = createOrderData();
      console.log("Simulated API Request:", orderData);
      navigate("/OrderSent");
    } catch (error) {
      console.log("Error posting order:", error);
    }
  };

  return (
    <div
      className={`main-confirmorder ${
        isRemoveModalVisible ? "modal-open" : ""
      }`}
    >
      <div className="confirmorder-head">
        <ArrowBackIosNew className="myprofile-back-icon" />
        <p className="confirmorder-title">YOUR ORDER</p>
      </div>
      <div className="confirmorder-meals">
        {articles.map((article) => (
          <div className="confirmorder-meal" key={article.id}>
            <div className="confirmorder-title-and-description">
              <p className="confirmorder-meal-title">{article.name}</p>
              <p className="confirmorder-meal-description">
                {article.description}
              </p>
            </div>
            <div className="confirmorder-price-and-counter">
              <div className="confirmorder-meal-price">
                {article.price * article.quantity}€
              </div>
              <div className="confirmorder-meal-counter">
                <img
                  src={removebuttonrImg}
                  alt="removebutton"
                  className="counter-button-confirmorder"
                  onClick={() => decreaseQuantity(article.id)}
                />
                <h2 className="confirmorder-meal-quantity">
                  {article.quantity}
                </h2>
                <img
                  src={article.quantity >= 10 ? addbuttongImg : addbuttonrImg}
                  alt="addbutton"
                  className="counter-button-confirmorder"
                  onClick={() => increaseQuantity(article.id)}
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
            {updateTotalCost().toFixed(2)}€
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
          value={comment}
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
                    src={deleteBtn}
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
