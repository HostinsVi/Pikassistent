import { useState } from "react";
import './login.css';
import SignUp from "../signUp/signUp";
import { Link } from "react-router-dom";


// import { handleLogin, handleSignUp, handleGoogleLogin } from "../../assets/firebase";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
          <div className="login-form-container">
            <form className={"login-form" }>
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
                <button className="login-login-btn" >Log in</button>
                <Link to="/SignUp" className="login-signup-btn"> 
                  Sign Up
                </Link>
                <button type="button" className="login-google-btn"> Continue With Google </button>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Login;

// email e password
// caso clicar em signup, o login-form-inputs-container
// recebe o atributo display:none, e é trocado por
// outra div, signup-form-inputs-container
// que tem Username, Email, Password, Date e Team
// Team é uma dropbox que escolhe entre
// time azul/vermelho/amarelo

// caso login com google seja feito, usuário é criado
// com nome crypto.randomUUID()
// depois é só trocar username de graça
// chat faz verificação de idade, então vai ter q
// atualizar os dados de perfil antes de acessar