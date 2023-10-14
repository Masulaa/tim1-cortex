import "./ChooseMeal.css";
import "../../style/global.css";

const ChooseMeal = () => {
  return (
    <>
      <div className="chpose-meal-head-content">
        <div className="choose-meal-head-content-without-text">
          <div className="choose-meal-up-part">
            <div className="choose-meal-up-section"></div>
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
