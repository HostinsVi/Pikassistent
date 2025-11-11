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
          <h1>Login</h1>
          <div className={"login-form-inputs-container"}>
            <label>Email:</label>
            <input
              className="login-input-container"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <label>Senha:</label>
            <input
              className="login-input-container"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>
          <div className="login-form-btns-container">
            <Link to="/SignUp" className="login-signup-btn">
              <span>Não tem uma conta? cadastre-se!</span>
            </Link>
            <button type="button" className="login-login-btn" onClick={() => {handleLogin ? navigate("/home") : alert('/falha ao fazer o login')}}>Entrar</button>
            <button type="button" className="login-google-btn" onclick={() => {handleGoogleLogin()}}>
              Continuar com o Google
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