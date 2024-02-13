import tulogo from "./Images/tulogo.png";

import MobileHeader from "./MobileHeader.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TUheader() {
  return (
    <div className="tuNavBars">
      <div className="upperNavBar">
        <div className="navigation">
          <ul className="tuNavItems">
            <li className="tuNavItem">
              Students
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="tuNavItem">
              Parents
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="tuNavItem">
              Alumni
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="tuNavItem">
              Faculty & Staff
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
            <li className="tuNavItem">
              Business
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
          </ul>
        </div>
        <div className="otherLinks">
          <ul className="tuNavItems">
            <li className="tuNavItem">
              <FontAwesomeIcon icon={faHeart} /> Give to TU
            </li>
            <li className="tuNavItem">
              <FontAwesomeIcon icon={faCalendar} />
              Calendars & Events
            </li>
            <li className="tuNavItem">
              <FontAwesomeIcon icon={faLaptop} />
              Directories
            </li>
            <li className="tuNavItem" id="tuSearch">
              Search
              <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="lowerNavBar">
        <div className="leftGraphics">
          <div className="parent">
            <div id="parallelogram">
              <div className="child">
                <img
                  src={tulogo}
                  className="tuLogo"
                  alt="Logo for Towson University"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rightLinks">
          <ul className="lowerLinks">
            <li className="lowerLink">About TU</li>
            <li className="lowerLink">Academics</li>
            <li className="lowerLink">Admissions & Aid</li>
            <li className="lowerLink">Student Life</li>
            <li className="lowerLink">Campus & Community</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PlanTitle() {
  return (
    <div className="planTitle">
      <h1>Degree Completion Plan</h1>
    </div>
  );
}

export default function PlanHeaders() {
  return (
    <section>
      <MobileHeader />
      <TUheader />
      <PlanTitle />
    </section>
  );
}
