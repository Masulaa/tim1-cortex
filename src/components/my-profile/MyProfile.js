import "./MyProfile.css";
import slika01 from "../../images/5b5efd8e2b3715267f1b3b8d1b2d49cf.png";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import editslika from "../../images/icons/Group 26.png";
import { ProfileService } from "../../api/api";

const MyProfile = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await ProfileService.GetProfile();
      setUser(response.data.success);
      setEmail(response.data.success.email); // Postavljamo email da bude user.email

      // console.log(response.data.success);
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
                defaultValue={email} // Koristimo email kao defaultValue
                InputLabelProps={{
                  shrink: !!email, // shrink label when email has a value
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
        >
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
