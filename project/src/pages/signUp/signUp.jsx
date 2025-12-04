import { useState } from "react";
import { Link } from "react-router-dom";
import { handleSignUp } from "../../assets/firebase";
import "./signUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [team, setTeam] = useState("");

  const idNumber = crypto.randomUUID();

  function validateSignUp() {
    // Validate email format
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Validate password strength
    const isValidPassword = (password) => {
      return password.length >= 6;
    };

    // Check if passwords match
    const passwordsMatch = () => {
      return password === confPassword;
    };

    // Check if all fields are filled
    const allFieldsFilled = () => {
      return email && username && password && confPassword && team;
    };

    // Main validation function
    if (!allFieldsFilled()) {
      alert("Todos os campos são obrigatórios.");
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Por favor, insira um email válido.");
      return false;
    }

    if (!isValidPassword(password)) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    if (!passwordsMatch()) {
      alert("As senhas não coincidem.");
      return false;
    }

    // Se chegou até aqui, tudo está válido
    console.log("a Validação foi um sucesso")
    handleSignUp(email, username, password, team, idNumber)

    return true;
  }

  const handleSubmit = () => {
    if (validateSignUp()) {
      handleSignUp(email, username, password, team, idNumber);
    }
  };

  return (
    <main className="signup-container">
      <section className="signup-form-container">
        <form className="signup-form">
          <legend>Cadastro:</legend>
          <fieldset className={"signup-form-inputs-container"}>
            <div className="input-group">
              <label className="signup-label">Email:</label>
              <input
                className="signup-input-container"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="digite o seu email"
              />
            </div>
            <div className="input-group">
              <label className="signup-label">Username:</label>
              <input
                className="signup-input-container"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="digite o seu apelido"
              />
            </div>
            <div className="input-group">
              <label className="signup-label">Password:</label>
              <input
                className="signup-input-container"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="digite a senha"
              />
            </div>
            <div className="input-group">
              <label className="signup-label"> confirmação a senha:</label>
              <input
                className="signup-input-container"
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                placeholder="digite novamente a sua senha"
              />
            </div>

            <div className="input-group">
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
            <Link
              to="/login"
              className="signup-login-btn"
              aria-label="Voltar para a página de login"
            >
              Voltar ao Login
            </Link>
          </fieldset>
          <div className="signup-form-btns-container">
            <button
              type="button"
              className="signup-signup-btn"
              onClick={() => validateSignUp()}
            >
              Sign Up
            </button>
            <button type="button" className="signup-google-btn">
              Continuar com o Google
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default SignUp;

// A FAZER:

// - botão return to login page não está com o efeito de hover funcionando.
// - background ta sem a imagem original.
// - cores a serem ajustadas.
