import { logo, masterBall } from "../../assets/img";
import "./header.css";

function Header({ state }) {
  return (
    <header
      className={`header_container ${
        state === "absolute" ? "absoluteHeader" : null
      }`}
    >
      <img src={logo} alt="" />
      <img src={masterBall} alt="" />
    </header>
  );
}

export default Header;
