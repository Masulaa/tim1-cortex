import "./Settings.css";

import { useState } from "react";
import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import active from "../../images/icons/active.svg";
import inactive from "../../images/icons/inactive.svg";
const Settings = () => {
  const [days, setDays] = useState({
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
    Sunday: false,
  });

  const [dayText, setDayText] = useState({
    Monday: 'active',
    Tuesday: 'active',
    Wednesday: 'active',
    Thursday: 'active',
    Friday: 'active',
    Saturday: 'inactive',
    Sunday: 'inactive',
  });

  const toggleDay = (day) => {
    setDays({ ...days, [day]: !days[day] });
    setDayText({ ...dayText, [day]: days[day] ? 'inactive' : 'active' });
  };

  return (
    <div className="main-settings">
      <div className="settings-head">
        <ArrowBackIcon className="arrowBack-absolute2"></ArrowBackIcon>
        <ArrowBackIosNew className="back-icon-absolute"></ArrowBackIosNew>
        <p className="settings-title">SETTINGS</p>
      </div>
      <div className="settigs-content">
        <div className="settings-mini-title-and-description">
          <p className="settings-mini-title">Meal days</p>
          <p className="settings-description">
            Select the days for which you want meals for your business.
          </p>
        </div>
        <div className="settings-days">
          {Object.keys(days).map((day) => (
            <div className="settings-day" key={day}>
              <img
                src={days[day] ? active : inactive}
                className="settings-active-button"
                alt="radio-button"
                onClick={() => toggleDay(day)}
              />
              <p className={`settings-day-text-${dayText[day]}`}>{day}</p>
            </div>
          ))}
        </div>
        
      </div><div className="settings-button">
        <button className="primary-button">DONE</button></div>
    </div>
  );
};

export default Settings;