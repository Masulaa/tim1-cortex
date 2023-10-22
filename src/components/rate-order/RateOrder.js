import "./RateOrder.css";
import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
// import { Grade } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
/*import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";*/
import SendIcon from "@mui/icons-material/Send";
import profileIcon from "../../images/Ellipse 1.svg";
import { OrderService } from "../../api/api";
import { RatingService } from "../../api/api";
import { useEffect } from "react";

const RateOrder = () => {
  const [order, setOrder] = useState([])
  const [comment, setComment] = useState("")
  const [isCommentFilled, setIsCommentFilled] = useState(false);
  const [selectedStars, setSelectedStars] = useState([false, false, false, false, false, false]);
  const [starsValue,setStarsValue] = useState();
  const handleStarClick = (starIndex, value) => {
    const updatedStars = selectedStars.map((_, index) => index <= starIndex);
    setSelectedStars(updatedStars);
    setStarsValue(value);
    const isAnyStarSelected = updatedStars.some((star) => star);
    setIsCommentFilled(isAnyStarSelected);
  };

  const [articleRatings, setArticleRatings] = useState(order.map(() => ({
    selectedStars: [false, false, false, false, false],
    comment: "",
  })));
  

  const fetchOrder = async () => {
      try {
        const response = await OrderService.GetOrder();
        setOrder(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.log("Error fetching articles:", error);
      }
    };
  
    useEffect(() => {
      fetchOrder();
    }, []);
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.target.closest(".star")) {
          setSelectedStars([false, false, false, false, false, false]);
        }
      };
    
      window.addEventListener("click", handleClickOutside);
    
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }, [selectedStars]);
    const handleSendRatings = async () => {
      const ratingsData = order.map((item, index) => ({
        article_id: item.id,
        stars: starsValue,
        comment: comment,
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
      {" "}
      <ArrowBackIcon className="arrowBack-absolute"></ArrowBackIcon>
      <div className="rateorder-info">
        <ArrowBackIosNew className="back-icon" />
          <p className="rateorder-title">RATE ORDER</p>
      </div>
      <div>
        <div>
          <div>
 
           {order.map((item, index) => (
        <div className="rateorder-one-rate" key={index}>
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
            {[1, 2, 3, 4, 5,6].map((value, index) => (
  <StarOutlineOutlinedIcon
    key={index}
    className={`star ${selectedStars[index] ? "selected" : ""}` }
          value={value}
    onClick={() => handleStarClick(index, value)}
    
  />
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
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
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
      </div>
    </div>
  );
};

export default RateOrder;
