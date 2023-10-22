import "./Home.css";
import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import icon from "../../images/8bb19757e48ed988259f35eab3822824.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import profileIcon from "../../images/Ellipse 1.svg";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../api/api";
import { ProfileService } from "../../api/api";
import { startTransition } from "react";


const Dropdown = ({ isDropdownOpen, toggleDropdown, isAdmin, navigate, handleLogout }) => (
  <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
    <div className="options">
      <div className="option" onClick={() => { navigate("/MyProfile") }}>Profile</div>
      <div className="option" onClick={handleLogout}>Logout</div>
      {isAdmin && (
        <>
          <div className="option" onClick={() => { /* Handle Meal Settings click */ }}>Meal Settings</div>
          <div className="option" onClick={() => { /* Handle Invoice click */ }}>Invoice</div>
        </>
      )}
    </div>
  </div>
);

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const success = await AuthService.logout();
      if (success) {
        console.log("Logout successful");
      }
    } catch (error) {
      console.error("Error logout", error);
    }
  };

  const toChooseMeal = () =>{navigate("/ChooseMeal");}

  const fetchUser = async () => {
    try {
      const response = await ProfileService.GetProfile();
      setUser(response.data.success);
      console.log(response.data.success);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const isAdmin = user.admin === 1; // Check if the user is an admin (assuming admin property is 1 for admins)

 

  return (
    <>
      <div className="img" alt="img"></div>
      <div className="main1">
        <div className="topbar-home">
          <img src={logo} alt="logo" className="image-topbar-home" />
          <div
            className="image-topbar-home-profile-with-dropdown"
            onClick={toggleDropdown}
          >
            <img src={profileIcon} alt="logo" className="image-topbar-home-profile" />
            {isDropdownOpen ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
           <Dropdown isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} isAdmin={isAdmin} navigate={navigate} handleLogout={handleLogout} />

          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <div className="options">
              <div className="option" onClick={() => { navigate("/MyProfile") }}>Profile</div>
              <div className="option" onClick={handleLogout}>Logout</div>
              {isAdmin && ( // Render additional options if the user is an admin
                <>
                  <div className="option" onClick={() => { /* Handle Meal Settings click */ }}>Meal Settings</div>
                  <div className="option" onClick={() => { /* Handle Invoice click */ }}>Invoice</div>
                </>
              )}
            </div>
          </div>
        )}
        <div className="content-home">
          <div className="first-part-of-content-home">
            <img src={icon} alt="icon" className="img1-home" />
            <div className="title-home">I’m ordering for:</div>
          </div>
          <div className="second-part-of-content-home">
          <button className="primary-button" onClick={toChooseMeal}>TODAY</button>
            <button className="secondary-button">WHOLE WEEK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
