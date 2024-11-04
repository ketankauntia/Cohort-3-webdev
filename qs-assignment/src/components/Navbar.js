import "./Navbar.css";
import display from "../assets/Display.svg";
import down from "../assets/down.svg";

function Navbar() {
  return (
    <div class="header">
      <div class="header-option">
        <span>
          <img src={display} alt="Icon" width="20" height="20" />
        </span>
        Display <span></span>
        <img src={down} alt="Icon" width="20" height="20" />
      </div>
    </div>
  );
}

export default Navbar;
