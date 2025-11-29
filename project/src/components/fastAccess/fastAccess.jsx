import { chatIcon, pokedex, premierBall } from "../../assets/img";
import "./fastAccess.css";

function FastAccess() {
  return (
    <section className="fastAccess_container">
      <aside className="fastAccess_item">
        <img src={pokedex} alt="" className="pokedex" />
        <span>Pokedex</span>
      </aside>
      <aside className="fastAccess_item">
        <img src={premierBall} alt="" className="premierBall" />
        <span>ChatBot</span>
      </aside>
      <aside className="fastAccess_item">
        <img src={chatIcon} alt="" className="chatIcon" />
        <span>Chat Global</span>
      </aside>
    </section>
  );
}

export default FastAccess;
