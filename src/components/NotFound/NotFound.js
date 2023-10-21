import { ArrowBackIosNew } from "@mui/icons-material";
import "./NotFound.css";
import ErrorImage from "../../images/404.png"

const NotFound = () => {
    return(
        <div className="main">
            <div className="header">
                OVDJE HEADER
            </div>
            <ArrowBackIosNew className="back-icon"></ArrowBackIosNew>
            <div className="error">ERROR</div>
            <img src={ErrorImage} className="error-image"/>
            <div className="error-text">Page not found</div>
            <div className="footer">
                OVDJE FOOTER
            </div>
        </div>
    )
}

export default NotFound;