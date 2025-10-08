import { chatIcon, pokedex, premierBall } from "../../assets/img";
import "./fastAccess.css";

function FastAccess() {
  return (
    <footer className="fastAccess_container">
      <img src={chatIcon} alt="" className="chatIcon"/>
      <img src={premierBall} alt="" className="premierBall"/>
      <img src={pokedex} alt="" className="pokedex"/>
    </footer>
  );
}

export default FastAccess;
