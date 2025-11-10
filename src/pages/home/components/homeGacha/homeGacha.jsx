import { Link } from "react-router-dom";
import "./homeGacha.css";

function HomeGacha() {
  return (
    <div className="gacha-container">
      <Link to="/gacha" className="gacha-link">
        test
      </Link>
    </div>
  )
}


export default HomeGacha;