import { useState } from "react";
import { Link } from "react-router-dom";
import { handleSignUp } from "../../assets/firebase";
import "./signUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");

  const idNumber = crypto.randomUUID();

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <form className="signup-form">
          <div className="signup-form-btns-container">
            <button type="button" className="signup-google-btn">
              Continuar com o Google
            </button>
            <span>Or fill below</span>
          </div>
          <div className={"signup-form-inputs-container"}>
            <label className="signup-label">Email:</label>
            <input
              className="signup-input-container"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <label className="signup-label">Username:</label>
            <input
              className="signup-input-container"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
            />

            <label className="signup-label">Password:</label>
            <input
              className="signup-input-container"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Eles que lutem."
            />

            <label className="signup-label">Team:</label>
            <select
              className="signup-select-container"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            >
              <option value="">Select your Team</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Blue">Blue</option>
            </select>
          </div>
          <div className="signup-form-btns-container">
            <Link to="#">
              <button
                type="button"
                className="signup-signup-btn"
                onClick={() =>
                  handleSignUp(email, username, password, team, idNumber)
                }
              >
                Sign Up
              </button>
            </Link>
            <Link to="/login" className="signup-login-btn">
              <span>or return to login page</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// A FAZER:

// - botão return to login page não está com o efeito de hover funcionando.
// - background ta sem a imagem original.
// - cores a serem ajustadas.


