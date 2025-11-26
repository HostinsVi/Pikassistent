import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCoAszHtDNMyLKM6ccSFLrdQSY2tEFkYYg",
  authDomain: "pikassistent.firebaseapp.com",
  projectId: "pikassistent",
  storageBucket: "pikassistent.firebasestorage.app",
  messagingSenderId: "126651432215",
  appId: "1:126651432215:web:4a161828cfae6533df8b52",
  measurementId: "G-8B3JXM47J4"
};


// Initialize Firebase  
export const app = initializeApp(firebaseConfig); // inicia a comunicação com a conta do pikassitent do firebase

export const auth = getAuth(app); // autentica o login no projeto do pikassistent
export const googleProvider = new GoogleAuthProvider(); // libera o login através do google
export const db = getFirestore(app); // isso cria o cloud de usuários


// pq uma função tava usando promise e a outra async ???????

export const handleSignUp = (email, username, password, team, idNumber) => {
   createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = userCredential.user;

        return setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
          displayName: username,
          idNumber: idNumber,
          team: team,
          likes: 0
        });
      })
      .then(() => {
          alert("Sign Up Done, verify your email.");
          console.log("funfou");
          window.location.href = '/home';
      })
      .catch((error) => {
        console.log("n funfou");
        const errorMessage = error.message;
        console.log(errorMessage);
    });
};


// login - não tenho certeza se funciona pq a página reinicia quando recebe o form.
// se souber o pq me fala, deve ser algo do router/useState

export const handleLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};


// precisa usar useRef pra descobrir se o login ta funcionando. eu acho.


export const handleGoogleLogin = async() => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
}

// meu navegador (vitor) se recusa a deixar eu testar o botão do login, fé que ta funcionando!