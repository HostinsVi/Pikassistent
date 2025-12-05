import { Link } from "react-router-dom";
import { chatIcon, pokedex, premierBall } from "../../assets/img";
import "./fastAccess.css";

function FastAccess() {
  return (
    <section className="fastAccess_container">
      <Link to={"/pokedex"} className="fastAccess_item">
        <img src={pokedex} alt="" className="pokedex" />
        <span>Pokedex</span>
      </Link>
      <Link to={"/chatbot"} className="fastAccess_item">
        <img src={premierBall} alt="" className="premierBall" />
        <span>ChatBot</span>
      </Link>
      <Link to={"/chatonline"} className="fastAccess_item">
        <img src={chatIcon} alt="" className="chatIcon" />
        <span>Chat Global</span>
      </Link>
    </section>
  );
}

export default FastAccess;
