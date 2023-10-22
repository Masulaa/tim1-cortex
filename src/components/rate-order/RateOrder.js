import "./RateOrder.css";
import React from "react";
import slika01 from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ArrowBackIosNew, Grade } from "@mui/icons-material";
import GradeIcon from "@mui/icons-material/Grade";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../images/Ellipse 1.svg";
import PizzaImage from "../../images/PizzaCapricciosa.png";
import IceCreamImage from "../../images/dd43c18a3aa6cfb2c05d436792dd61aa.png";
import OrangeImage from "../../images/d55142bafca3db7dd33f3e21800a867e.png";

class FoodInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selektovaneZvijezde: [false, false, false, false, false, false],
    };
  }

  handleClick = (index) => {
    this.setState((prevState) => {
      const noviNiz = [...prevState.selektovaneZvijezde];
      for (let i = 0; i < 6; i++) {
        noviNiz[i] = false;
      }
      for (let i = 0; i <= index; i++) {
        noviNiz[i] = true;
      }
      return { selektovaneZvijezde: noviNiz };
    });
  };

  render() {
    const { foodName, foodDescription, foodPrice, foodImage, userImage } =
      this.props;

    const { selektovaneZvijezde } = this.state;

    const zvijezda = (index, selektovano) => (
      <GradeOutlinedIcon
        key={index}
        onClick={() => this.handleClick(index)}
        style={{ color: selektovano ? "#BD2B2B" : "black", opacity: "50%" }}
      />
    );

    const zvijezda2 = (index, selektovano) => (
      <GradeIcon
        key={index}
        onClick={() => this.handleClick(index)}
        style={{ color: selektovano ? "#BD2B2B" : "black" }}
        className="star"
      />
    );

    const Stars = selektovaneZvijezde.map((selektovano, index) =>
      selektovano ? zvijezda2(index, selektovano) : zvijezda(index, selektovano)
    );

    return (
      <>
      <div className="rateorder-one-rate">
        <div className="info">
          <img src={foodImage} alt="slika hrane" className="food-picture" />
          <div>
            <h1 className="food-title">{foodName}</h1>
            <p className="food-desc">{foodDescription}</p>
          </div>
          <div className="price">{foodPrice}</div>
        </div>
        <div className="rate-div">
          <img src={userImage} alt="slika korisnika" className="user-picture" />
          <div className="stars">{Stars}</div>
        </div>
        <div>
          <div className="text-field">
            <TextField
              label="Comments"
              variant="outlined"
              style={{ width: "21.375rem" }}
              className="inputField"
            />
            <SendIcon
              onClick={() => alert("Funkcija za slanje poruke")}
              className="send-icon"
            />
          </div></div>
          <div className="line">
        </div></div>
      </>
    );
  }
}

const RateOrder = () => {
  return (
    <div className="main-rateOrder">
      {" "}
      <div className="rateorder-info">
        <ArrowBackIosNew className="back-icon" />

          <p className="rateorder-title">RATE ORDER</p>
      </div>
      <div>
        <div>
          <div>
            <FoodInfo
              foodName="Pizza Capricciosa"
              foodDescription="Mozzarela cheese, baked ham, mushrooms, tomato"
              foodPrice="11$"
              userName="Ime Korisnika"
              foodImage={PizzaImage}
              userImage={profileIcon}
            />
            {/* <FoodInfo
              foodName="Chocolate Ice Cream"
              foodDescription=""
              foodPrice="2$"
              userName="Ime Korisnika"
              foodImage={IceCreamImage}
              userImage={profileIcon}
            />
            <FoodInfo
              foodName="Orange Juice"
              foodDescription="1.5L"
              foodPrice="1.5$"
              userName="Ime Korisnika"
              foodImage={OrangeImage}
              userImage={profileIcon}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateOrder;
