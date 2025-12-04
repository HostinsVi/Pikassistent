import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { handleGoogleLogin, handleLogin } from "../../assets/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <main className="login-container">
      <sectiion className="login-form-container">
        <form onSubmit={(e) => e.preventDefault()} className={"login-form"}>
          <legend>Login</legend>
          <fieldset className={"login-form-inputs-container"}>
            <div className="input-group">
              <label>Email:</label>
              <input
                className="login-input-container"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
            </div>
            <div className="input-group">
              <label>Senha:</label>
              <input
                className="login-input-container"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />
            </div>
            <Link to="/SignUp" className="login-signup-btn">
              <span>Não tem uma conta? cadastre-se!</span>
            </Link>
          </fieldset>
          <div className="login-form-btns-container">
            <button
              type="button"
              className="login-btn"
              onClick={async () => {
                const ok = await handleLogin(email, password);
                if (ok) navigate("/home");
                else alert("Falha ao fazer login");
              }}
            >
              Entrar
            </button>

            <button
              type="button"
              className="login-google-btn"
              onClick={() => {
                handleGoogleLogin;
              }}
            >
              Continuar com o Google
            </button>
          </div>
        </form>
      </sectiion>
    </main>
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
