import NavBar from "../../pages/home/components/homeHeader/homeNavbar";
import "./header.css";

function Header({ state, userConnected }) {
  return (
    <header
      className={`header_container ${
        state === "relative" ? "relativeHeader" : null
      }`}
      style={userConnected ? {justifyContent: "space-between"} : null}
    >
      {userConnected ? <NavBar />: null}
      {/* {userConnected ? <img src={userImage}/> : null} */}
      <button className="changeTheme_button"/>
    </header>
  );
}

export default Header;
