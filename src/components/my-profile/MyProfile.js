import React, { useState, useEffect } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { ProfileService } from "../../api/api";
import slika01 from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import editslika from "../../images/icons/Group 26.png";
import closeBtn from "../../images/close.svg";
import "./MyProfile.css"; // Stilovi za MyProfile komponentu

const MyProfile = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [password, setPassword] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);
  const [email, setEmail] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const fetchUser = async () => {
    try {
      const response = await ProfileService.GetProfile();
      setUser(response.data.success);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    setEmail(user.email);
  }, [user.email]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setButtonActive(email !== "" && newPassword !== "");
  };

  const openModal = (text) => {
    setModalText(text);
    setModalVisible(true);
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
                variant="outlined"
                style={{ width: "326px" }}
                className="inputField"
                onChange={handleEmailChange}
                value={email}
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                style={{ width: "326px" }}
                className="inputField"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
          </section>
        </div>
      </div>
      <div className="myprofile-button-wrapper">
        <button
          className={`disabled-btn ${isButtonActive ? "active" : ""}`}
          disabled={!isButtonActive}
          onClick={() => openModal("Changes saved.")}
        >
          SAVE CHANGES
        </button>
      </div>

      {isModalVisible && (
        <div className="myprofile-changes-saved">
          <p className="myprofile-changes-saved-text">
            {modalText}
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
