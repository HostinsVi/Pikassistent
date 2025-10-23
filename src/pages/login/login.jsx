import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth  } from "firebase/auth";
import { useState } from "react";
import { app } from "../../assets/firebase.js";
import './login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loginError, setLoginError] = useState('');

    const auth = getAuth(app); // entra no projeto do pikassistent
    const googleProvider = new GoogleAuthProvider(); // libera o login através do google


    // registro
    const handleSignUp = async() => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Sign Up Done"); 
        }
        catch(error) {
            console.error(error);
        }
    }
    
    // login do google
    const handleGoogleLogin = async() => {
        try {
            await signInWithPopup(auth,googleProvider);
        } catch (error) {
            console.error(error);
        }
    }

    // login - não tenho certeza se funciona pq a página reinicia quando recebe o form.
    // se souber o pq me fala, deve ser algo do router/useState
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in")
        } 
        catch(error) {
            console.error(error);
        }
    }

    return (
        <div className="login-container">
          <div className="login-form-container">
            <form className="login-form-inputs-container">
                <input
                    className="login-input-container"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    // n sei se precisava ser onChange
                    placeholder="Enter your Email"
                />
                <input
                    className="login-input-container"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     // n sei se precisava ser onChange
                    placeholder="Enter your Password"
                    // e fiquei na duvida se esse botão é pra ser onCliCK ou submit, como
                    // o login da refresh na página, n sei dizer
                />
              <div className="login-form-btns-container">

                <button className="login-login-btn" onClick={() => handleLogin()}>Log in</button>
                <button className="login-signup-btn" onClick={() => handleSignUp()}>Sign Up</button>
                <button 
                    className="login-google-btn" 
                    onClick={() => handleGoogleLogin()}
                    >Continue With Google
                </button>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Login;