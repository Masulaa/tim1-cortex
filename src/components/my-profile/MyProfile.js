import React, { useState, useEffect } from "react";
import { ArrowBackIosNew, ArrowBack } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { ProfileService } from "../../api/api";
import slika01 from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import editslika from "../../images/icons/Group 26.png";
import closeBtn from "../../images/close.svg";
import "./MyProfile.css"; // Stilovi za MyProfile komponentu
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [user, setUser] = useState({ email: "", first_name: "", last_name: "" }); // Include 'first_name' and 'last_name' in initial state

  const [isButtonActive, setButtonActive] = useState(false);
  const [firstName, setFirstName] = useState(user.first_name); // Initialize 'firstName' with the user's first name
  const [lastName, setLastName] = useState(user.last_name); // Initialize 'lastName' with the user's last name
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const [profileImage, setProfileImage] = useState();

  const fetchUser = async () => {
    try {
      const response = await ProfileService.GetProfile();
      setUser(response.data.success);
      setFirstName(response.data.success.first_name);
      setLastName(response.data.success.last_name);
      console.log(response.data.success);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setButtonActive(firstName !== "" && event.target.value !== ""); // Use the current value from the event
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

  const handleProfileImageChange = (event) => {
    // Handle image selection
    const selectedImage = event.target.files[0];
    setProfileImage(selectedImage);
  };

  const EditProfile = async () => {
    try {
      const response = await ProfileService.EditProfile({
        first_name: firstName,
        last_name: lastName,
        photo: profileImage,
      });
      console.log("API Response", response);
      fetchUser();
    } catch (error) {
      console.log("Error sending ratings:", error);
    }
  };

  return (
    <div className="main-myprofile">
      <div className="myprofile-content">
        <div className="myprofile-info">
          <Link to="/home">
            <ArrowBack className="arrowBack-absolute2" />
            <ArrowBackIosNew className="back-icon-absolute" />
          </Link>
          <div className="myprofile-title-and-icon">
            <p className="myprofile-title">PROFILE</p>
            <input
              type="file"
              accept="image/*"
              id="profile-image-input"
              style={{ display: "none" }}
              onChange={handleProfileImageChange}
            />
            <label htmlFor="profile-image-input">
              <img src={slika01} alt="profilna" className="myprofile-picture" />
            </label>
            <img src={editslika} alt="edit" className="myprofile-edit-picture" />
          </div>
          <p className="myprofile-email">{user.email}</p>
        </div>
        <div className="myprofile-input-fields">
          <section className="myprofile-input-wrapper">
            <div className="input-wrapper2">
              <TextField
                label="First name"
                variant="outlined"
                style={{ width: "326px" }}
                className="inputField"
                onChange={handleFirstNameChange}
                value={firstName}
              />
              <TextField
                label="Last name"
                variant="outlined"
                style={{ width: "326px" }}
                className="inputField"
                onChange={handleLastNameChange}
                value={lastName}
              />
            </div>
          </section>
        </div>
      </div>
      <div className="myprofile-button-wrapper">
        <button
          className={`disabled-btn ${isButtonActive ? "active" : ""}`}
          disabled={!isButtonActive}
          onClick={() => {
            openModal("Changes saved.");
            EditProfile();
          }}
        >
          SAVE CHANGES
        </button>
      </div>

      {isModalVisible && (
        <div className="myprofile-changes-saved">
          <p className="myprofile-changes-saved-text">{modalText}</p>
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
