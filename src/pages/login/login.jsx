import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { handleGoogleLogin, handleLogin } from "../../assets/firebase";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form className={"login-form"}>
          <div className={"login-form-inputs-container"}>
            <input
              className="login-input-container"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <input
              className="login-input-container"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>
          <div className="login-form-btns-container">
            <button type="button" className="login-login-btn" onClick={() => {handleLogin ? navigate("/home") : alert('/falha ao fazer o login')}}>Log in</button>
            <Link to="/SignUp" className="login-signup-btn">
              Sign Up
            </Link>
            <button type="button" className="login-google-btn" onclick={() => {handleGoogleLogin()}}>
              Continue With Google{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// caso login com google seja feito, usuário é criado
// com nome crypto.randomUUID()
// depois é só trocar username de graça
// chat faz verificação de idade, então vai ter q
// atualizar os dados de perfil antes de acessar

// podemos mudar isso pra caso usuario logar com google, ele
// é redirecionado pra uma tela de registro onde só se 
// tem usuário, idade e time