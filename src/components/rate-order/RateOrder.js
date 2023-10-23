import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { ArrowBackIosNew } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import profileIcon from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import { OrderService } from "../../api/api";
import { RatingService } from "../../api/api";
import "./RateOrder.css";
import {Link} from "react-router-dom";
const RateOrder = () => {
  const [order, setOrder] = useState([]);
  const [comment, setComment] = useState("");
  const [isCommentFilled, setIsCommentFilled] = useState(false);

  // Maintain an array of selected stars for each product
  const [selectedStars, setSelectedStars] = useState([]);

  const fetchOrder = async () => {
    try {
      const response = await OrderService.GetOrder();
      const orderWithStars = response.data.articles.map((item) => ({
        ...item,
        selectedStars: [false, false, false, false, false],
      }));
      setOrder(orderWithStars);
      console.log(orderWithStars);
    } catch (error) {
      console.log("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleStarClick = (productIndex, starIndex, value) => {
    const updatedOrder = [...order];
    updatedOrder[productIndex].selectedStars = updatedOrder[productIndex].selectedStars.map((_, index) => index <= starIndex);

    // Update the order with the new selected stars
    setOrder(updatedOrder);

    // Check if any star is selected for this product
    const isAnyStarSelected = updatedOrder[productIndex].selectedStars.some((star) => star);
    setIsCommentFilled(isAnyStarSelected);
  };

  const handleSendRatings = async () => {
    const ratingsData = order.map((item, index) => ({
      article_id: item.id,
      stars: item.selectedStars.findIndex((star) => star === true) + 1,
      comment: item.comment,
    }));

    const data = { ratings: ratingsData };

    try {
      const response = await RatingService.PostRating(data);
      console.log("API Response", response);
    } catch (error) {
      console.log("Error sending ratings:", error);
    }
  };

  return (
    <div className="main-rateOrder">
      <Link to="/home">
      <ArrowBackIcon className="arrowBack-absolute"></ArrowBackIcon>
      </Link> 
      <div className="rateorder-info">
      <Link to="/home">
        <ArrowBackIosNew className="back-icon" />
        </Link>
        <p className="rateorder-title">RATE ORDER</p>
      </div>
      <div>
        {order.map((item, productIndex) => (
          <div className="rateorder-one-rate" key={productIndex}>
            <div className="info">
              <img src={`https://4n2q9d.ictcortex.me/photos/${item.photo}`} alt="slika hrane" className="food-picture" />
              <div>
                <h1 className="food-title">{item.name}</h1>
                <p className="food-desc">{item.description}</p>
              </div>
              <div className="price">{item.price}</div>
            </div>
            <div className="rate-div">
              <img src={profileIcon} alt="slika korisnika" className="user-picture" />
              <div className="stars">
                {[1, 2, 3, 4, 5].map((value, starIndex) => (
                  <div
                    key={starIndex}
                    className={`star ${item.selectedStars[starIndex] ? "selected" : ""}`}
                    onClick={() => handleStarClick(productIndex, starIndex, value)}
                  >
                    {item.selectedStars[starIndex] ? (
                      <StarIcon color="#BD2B2B" fontSize="large" />
                    ) : (
                      <StarOutlineIcon color="#131313" fontSize="large" style={{ opacity: 0.5 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-field">
                <TextField
                  label="Comments"
                  variant="outlined"
                  style={{ width: "21.375rem" }}
                  className="inputField"
                  value={item.comment}
                  onChange={(e) => {
                    const updatedOrder = [...order];
                    updatedOrder[productIndex].comment = e.target.value;
                    setOrder(updatedOrder);
                    setIsCommentFilled(!!e.target.value);
                  }}
                />
                <SendIcon
                  onClick={handleSendRatings}
                  className={`send-icon ${isCommentFilled ? 'red-icon' : ''}`}
                />
              </div>
            </div>
            <div className="line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RateOrder;
