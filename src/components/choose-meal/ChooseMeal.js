import React, { useState } from "react";
import "./ChooseMeal.css";
import "../../style/global.css";
import food from "../../images/food1.jpg";
import drinks from "../../images/drinks.jpg";
import salads from "../../images/salad.jpg";
import { Card, ConfigProvider, Divider } from "antd";
import { Link } from 'react-router-dom';

const { Meta } = Card;


const ChooseMeal = () => {
  return (
    <main>
      <h1 className="category-title">Categories</h1>
      <Divider />
      <section className="category-section">
        <Link to="/Tmp" >
          <Card
            hoverable
            className="category"
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src={food}
              />
            }
          >
            <Meta
              title="Food"
              description="Description"
            />
          </Card>
        </Link>
        <Link to="/Tmp" >
          <Card
            hoverable
            className="category"
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src={drinks}
              />
            }
          >
            <Meta
              title="Drinks"
              description="Description"
            />
          </Card>
        </Link>
        <Link to="/Tmp" >
          <Card
            hoverable
            className="category"
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src={salads}
              />
            }
          >
            <Meta
              title="Salads"
              description="Description"
            />
          </Card>
        </Link>
        
      </section>
    </main>
  );
};

export default ChooseMeal;
