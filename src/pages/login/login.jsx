import './login.css';
import { useState } from "react";
import Header from '../../components/header/header.jsx';

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  
  function handleLogin() {
    if (userName === 'adm' && password === '00000') {
      alert('sucesso! mas ainda não implementamos outra tela');
    } else {
      alert('preencha os dados corretamente antes de proceguir');
    }
  }

  return (
    <section className="login_container">
      <Header state="absolute"/>
      <main className="login_content">
        <h1>Login</h1>
        <section className="loginInput_container">
          <span>Nome de Usuário:</span>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <span>Senha:</span>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </section>
      </main>
      <button onClick={() => handleLogin()}>Sla q nome</button>
    </section>
  );
}

export default Login;
