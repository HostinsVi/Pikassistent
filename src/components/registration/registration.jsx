import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth  } from "firebase/auth";
import { useState } from "react";
import { app } from "../../assets/firebase.js";


// TEM QUE TROCAR O QUE TA NO LOGIN.JSX POR ISSO AQUI E ADAPTAR O CSS DE ACORDO
// dps pd só deletar essa pasta e o arq tmb


function Registration() {
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
        <div>
            <form>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    // n sei se precisava ser onChange
                    placeholder="Enter your Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     // n sei se precisava ser onChange
                    placeholder="Enter your Password"
                    // e fiquei na duvida se esse botão é pra ser onCliCK ou submit, como
                    // o login da refresh na página, n sei dizer
                />
                <button onClick={() => handleLogin()}>Log in</button>
            </form>
            <button onClick={() => handleSignUp()}>Sign Up</button>
            <button 
                className="googleLogin" 
                onClick={() => handleGoogleLogin()}
                >Continue With Google
            </button>
        </div>
    )
}

export default Registration;