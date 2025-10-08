import { masterBall, premierBall, pokedex, chatIcon } from "../../assets/img";
import './landingPage.css';

function LandingPage () {
    return (
    <main className="landingPage_container">
      <header>
        <img src={masterBall} alt="masterBall" />
      </header>
      <footer className="fastAccess">
        <img src={premierBall} alt="premierBall" />
        <div className="footerButtons_container">
          <img src={pokedex} alt="pokedex" />
          <img src={chatIcon} alt="chatIcon" />
        </div>
      </footer>
    </main>
    );
}

export default LandingPage;