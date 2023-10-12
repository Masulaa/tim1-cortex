import "./Login.css";

import logo from "../../images/logo.png";




const LogIn = () => {
  return (
    <div className="main">
      <div className="img"></div>
      <div className="title">
        <h1 className="title-welcome">Welcome</h1>
        <img src={logo} alt="slika1"></img>
      </div>

    </div>
  );
};
export default LogIn;
