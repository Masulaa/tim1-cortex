import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrder } from "../../store/orderStore"; // Zamijenite sa tačnom putanjom do vašeg orderSlice fajla
import { useEffect } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import "./ConfirmOrder.css";
import removebuttongImg from "../../images/RemoveButton.png";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";
import OutlinedInput from "@mui/material/OutlinedInput";

const ConfirmOrder = () => {
  const dispatch = useDispatch();


  const [quantity, setQuantity] = useState(1);
  
  const [removeImage, setRemoveImage] = useState(removebuttongImg);
  const [addImage, setAddImage] = useState(addbuttonrImg);

  const orders = useSelector((state) => state.orders.orders);

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
    console.log(orderInfo)
  };

  return (
    <div className="main-confirmorder">
      <div className="confirmorder-head">
        <ArrowBackIosNew className="myprofile-back-icon"></ArrowBackIosNew>
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
        <div className="confirmorder-meal-price">{order.price}</div>
        <div className="confirmorder-meal-counter">
        

<img
  src={removeImage}
  alt="removebutton"
  className="counter-button-confirmorder"
  onClick={decreaseQuantity}
/><h2 className="confirmorder-meal-quantity">{quantity}</h2><img
  src={addImage}
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
        <OutlinedInput maxRows={4} placeholder="Type" minRows={4} multiline style={{ width: "100%" }} />
      </div>
      <div className="confirmorder-meals-button">
        <button className="primary-button">CONFIRM ORDER</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
