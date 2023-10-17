import "./MyProfile.css"
import slika01 from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png"
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import editslika from "../../images/icons/Group 26.png"

const MyProfile = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonActive, setButtonActive] = useState(false);

  
    const handleEmailChange = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      setButtonActive(newEmail !== "" && password !== "");
    };
  
    const handlePasswordChange = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      setButtonActive(email !== "" && newPassword !== "");
    };

  return (
    <div className="main-myprofile">
      
      <div className="myprofile-content">
        <div className="myprofile-info"> <ArrowBackIosNew className="myprofile-back-icon"></ArrowBackIosNew>
          <div className="myprofile-title-and-icon"> 
            <p className="myprofile-title">PROFILE</p>
            <img src={slika01} alt="profilna" className="myprofile-picture"></img>
            <img src={editslika} alt="edit" className="myprofile-edit-picture"></img>
          </div>
          <p className="myprofile-email">someonesemail@mail.com</p>
        </div>
        <div className="myprofile-input-fields">
        <section className="myprofile-input-wrapper">
        <div className="input-wrapper2">
          <TextField
            label="Email"
            variant="outlined"
            style={{ width: "326px" }}
            className="inputField"
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            style={{ width: "326px" }}
            className="inputField"
            onChange={handlePasswordChange}
          />
        </div>
        
      </section>
        </div><div className="myprofile-button-wrapper">
          <button
            className={`disabled-btn ${isButtonActive ? "active" : ""}`}
            disabled={!isButtonActive}
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
