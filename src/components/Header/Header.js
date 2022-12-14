/* ---------------- SCSS IMPORTS ---------------- */
import "./Header.scss";
/* ---------------- IMAGE IMPORTS ---------------- */
import logo from "../../assets/images/BrainFlix-logo.svg";
/* ---------------- REACT IMPORTS ---------------- */
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* Linking to the home page */}
        <Link to={"/"}>
          <div className="header__logo-container">
            <img src={logo} alt="BrainFlix Logo"></img>
          </div>
        </Link>
        <div className="header__info-container">
          <div className="header__search-container">
            <div className="header__search-icon"></div>
            <input className="header__search-box" placeholder="Search"></input>
            <div className="header__avatar"></div>
          </div>
          <div className="header__upload-container">
            <div className="header__upload-icon"></div>
            {/* Linking to the upload page */}
            <Link to={"/upload"} className="header__upload-link">
              <button className="header__upload-button">UPLOAD</button>
            </Link>
            <div className="header__avatar-medium"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
