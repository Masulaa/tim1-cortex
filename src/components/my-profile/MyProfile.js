import React, { useState, useEffect } from "react";
import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from "@mui/material/TextField";
import { ProfileService } from "../../api/api";
import slika01 from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import editslika from "../../images/icons/Group 26.png";
import closeBtn from "../../images/close.svg";
import "./MyProfile.css"; // Stilovi za MyProfile komponentu
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const [isButtonActive, setButtonActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const navigate = useNavigate();


  const fetchUser = async () => {
    try {
      const response = await ProfileService.GetProfile();
      setUser(response.data.success);
      console.log(response.data.success)
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    setFirstName(user.first_name);
  }, [user.first_name]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    const lastName = event.target.value;
    setLastName(lastName);
    setButtonActive(firstName !== "" && lastName !== "");
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

  const [profileImage, setProfileImage] = useState();

const handleProfileImageChange = (event) => {
  // Ovde možete rukovati izborom slike, na primer, pomoću File API-ja.
  const selectedImage = event.target.files[0];
  setProfileImage(selectedImage);
};

const userNewData = {
  first_name: firstName,
  last_name: lastName,
  photo: profileImage
}
const EditProfile = () =>{


try {
  const response = ProfileService.EditProfile(userNewData);
  console.log("API Response", response);
  fetchUser();
} catch (error) {
  console.log("Error sending ratings:", error);
}
}


  return (
    <div className="main-myprofile">
      <div className="myprofile-content">
        <div className="myprofile-info">
        <ArrowBackIcon className="arrowBack-absolute2" onClick={() => { navigate("/home") }}></ArrowBackIcon>
          <ArrowBackIosNew className="back-icon-absolute" />
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
          onClick={() => {openModal("Changes saved.")
        EditProfile();}}
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
