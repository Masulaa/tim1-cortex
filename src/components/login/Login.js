import "./Login.css";
import background from "../../images/new/background.jpeg";
import logo from "../../images/new/logo.png";



const inputField = new MDCTextField(document.querySelector('.mdc-text-field'));
const LogIn = () => {
  return (
    <div className="main">
      <div className="img"></div>
      <div className="title">
        <h1 className="title-welcome">Welcome</h1>
        <img src={logo}></img>
      </div>
      <TextField label="Username" variant="outlined" />
    </div>
  );
};
export default LogIn;
