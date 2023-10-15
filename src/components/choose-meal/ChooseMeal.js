import "./ChooseMeal.css";
import "../../style/global.css"
import profileIcon from "../../images/Ellipse 1.svg";



const ChooseMeal = () => {
  return (
    <div className="main-choosemeal">
      <section className="top-choosemeal">
        <div className="user-bar-choosemeal"> <img
            src={profileIcon}
            alt="logo"
            className="image-topbar-home-profile"
          ></img></div>
        <div className="search-choosemeal"></div>
        <div className="categories-choosemeal"></div>
      </section>
      <section className="meals-list-choosemeal">
        <div className="meals-title-choosemeal"></div>
      </section>
    </div>
  );
};

export default ChooseMeal;
