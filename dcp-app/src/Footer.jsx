import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="tuFooter">
      <div className="tuUpperFooter">
        <div className="tuFooterLeft">
          <p className="tuFooterLeftText">8000 York Road</p>
          <p className="tuFooterLeftText">Towson, MD 21252</p>
          <p className="tuFooterLeftText">
            <FontAwesomeIcon icon={faPhone} />
            410-704-2000
          </p>
        </div>
        <div className="tuFooterCenter">
          <div className="tuFooterCenterLeftList">
            <p className="tuFooterCenterLeftItem">Contact Us</p>
            <p className="tuFooterCenterLeftItem">Directions & Parking</p>
            <p className="tuFooterCenterLeftItem">Work at TU</p>
          </div>
          <div className="tuFooterCenterRightList">
            <p className="tuFooterCenterRightItem">Accessibility</p>
            <p className="tuFooterCenterRightItem">Privacy</p>
            <p className="tuFooterCenterRightItem">Clery Report</p>
          </div>
        </div>
        <div className="tuFooterRight">
          <div className="footerRightContent">
            <div className="footerRightIcons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <p className="tuFooterRightText">
              <FontAwesomeIcon icon={faSquare} />
              Sign up for text alerts
            </p>
            <p className="tuFooterRightText">
              <FontAwesomeIcon icon={faLanguage} />
              Translate
            </p>
            <p className="tuFooterRightText">Copyright &copy; 2024</p>
          </div>
        </div>
      </div>
      <div className="usmMessage">
        A University System of Maryland Member Institution
      </div>
    </footer>
  );
}
