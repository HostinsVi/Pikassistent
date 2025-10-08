import { logo, masterBall } from "../../assets/img";
import './Header.css';

function Header() {
    return (
        <header className="header_container">
            <img src={logo} alt="" /><img src={masterBall} alt="" />
        </header>
    );
}

export default Header;