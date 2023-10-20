import "./Settings.css";
import { ArrowBackIosNew } from "@mui/icons-material";

const Settings = () => {
  return (
    <div className="main-settings">
      <div className="settings-head">
        <ArrowBackIosNew className="settings-back-icon"></ArrowBackIosNew>
        <p className="settings-title">SETTINGS</p>
      </div>
      <div className="settigs-content">
        <div className="settings-mini-title-and-description">
            <p className="settings-mini-title">Meal days</p>
            <p className="settings-description">Select the days for which you want meals for your business.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
