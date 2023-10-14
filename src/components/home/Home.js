import "./Home.css";

import logo from "../../images/logo.png";
import icon from "../../images/8bb19757e48ed988259f35eab3822824.png";
import profileIcon from "../../images/Ellipse 1.svg";

const Home = () => {
  return (
    <>

      <div className="img" alt="img"></div>
      <div className="main">
        <div className="topbar-home">
          <img src={logo} alt="logo" className="image-topbar-home"></img>
          <img
            src={profileIcon}
            alt="logo"
            className="image-topbar-home-profile"
          ></img>
        </div>

        <div className="content-home">
          <div className="first-part-of-content-home">
            <img src={icon} alt="icon" className="img1-home"></img>

            <div className="title-home">I’m ordering for:</div>
          </div>
          <div className="second-part-of-content-home">
            <button className="primary-button">TODAY</button>
            <button className="secondary-button">WHOLE WEEK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;