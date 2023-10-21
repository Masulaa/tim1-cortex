import React, { useState, useEffect } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { ProfileService } from "../../api/api";
import slika01 from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import editslika from "../../images/icons/Group 26.png";
import closeBtn from "../../images/close.svg";
import "./MyProfile.css"; // Stilovi za MyProfile komponentu

const MyProfile = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await ProfileService.GetProfile();
      setUser(response.data.success);
      setEmail(response.data.success.email);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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

  const openModal = () => {
    setModalVisible(true);
    // Postavi timeout za zatvaranje modaala nakon 3 sekunde
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="main-myprofile">
      <div className="myprofile-content">
        <div className="myprofile-info">
          <ArrowBackIosNew className="myprofile-back-icon" />
          <div className="myprofile-title-and-icon">
            <p className="myprofile-title">PROFILE</p>
            <img src={slika01} alt="profilna" className="myprofile-picture" />
            <img src={editslika} alt="edit" className="myprofile-edit-picture" />
          </div>
          <p className="myprofile-email">{user.email}</p>
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
                defaultValue={email}
                InputLabelProps={{
                  shrink: !!email,
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                style={{ width: "326px" }}
                className="inputField"
                onChange={handlePasswordChange}
                value={user.password}
              />
            </div>
          </section>
        </div>
      </div>
      <div className="myprofile-button-wrapper">
        <button
          className={`disabled-btn ${isButtonActive ? "active" : ""}`}
          disabled={!isButtonActive}
          onClick={openModal}
        >
          SAVE CHANGES
        </button>
      </div>

      {isModalVisible && (
        <div className="myprofile-changes-saved">
          <p className="myprofile-changes-saved-text">
            Changes saved.
          </p>
          <img
            src={closeBtn}
            className="myprofile-changes-saved-icon"
            alt="Close"
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default MyProfile;
