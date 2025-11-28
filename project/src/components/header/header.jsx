import { changeDarkTheme, defaultUser } from "../../assets/img";
import "./header.css";

function Header({ state, userConnected }) {
  const userImage = defaultUser;
  return (
    <header
      className={`header_container ${
        state === "relative" ? "relativeHeader" : null
      }`}
      style={userConnected ? {justifyContent: "space-around"} : null}
    >
      {userConnected ? <img src={userImage}/> : null}
      <img src={changeDarkTheme} alt="change Theme" />
    </header>
  );
}

export default Header;
