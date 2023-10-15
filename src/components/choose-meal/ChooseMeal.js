import "./ChooseMeal.css";
import "../../style/global.css";
import slika01 from "../../images/Ellipse 1.svg";
import slika02 from "../../images/logo.png";
import slika03 from "../../images/icons/shopping_bag.svg";

const ChooseMeal = () => {
  return (
    <>
      <div className="choose-meal-head-content">
        <div className="choose-meal-head-content-without-text">
          <div className="choose-meal-up-part">
            <div className="choose-meal-up-section">
              <div className="choose-meal-topbar">
                <img src={slika01} alt="img"></img>
                <div className="choose-meal-other-part-of-topbar">
                  <img
                    src={slika02}
                    className="choose-meal-size-logo-of-company"
                    alt="img"
                  ></img>
                  <img
                    src={slika03}
                    className="choose-meal-bag-icon"
                    alt="img"
                  ></img>
                </div>
              </div>
              <div className="choose-meal-search-input">
                <div className="choose-meal-search-input-more-detailed">
                  <div className="choose-meal-more-detailed">
                  <input type="text" className="choose-meal-search-input" placeholder="Search"></input></div>
                </div>
              </div>
            </div>
          </div>
          <div className="choose-meal-down-part"></div>
        </div>
        <div className="choose-meal-head-content-text">
          <div className="choose-meal-head-content-text">Recommended</div>
        </div>
      </div>
      <div className="choose-meal-main-content"></div>
    </>
  );
};

export default ChooseMeal;
