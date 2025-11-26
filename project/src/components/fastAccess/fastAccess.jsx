import { chatIcon, pokedex, premierBall } from "../../assets/img";
import "./fastAccess.css";

function FastAccess() {
  return (
    <header className="fastAccess_container">
      <img src={chatIcon} alt="" className="chatIcon"/>
      <img src={premierBall} alt="" className="premierBall"/>
      <img src={pokedex} alt="" className="pokedex"/>
    </header>
  );
}

export default FastAccess;
