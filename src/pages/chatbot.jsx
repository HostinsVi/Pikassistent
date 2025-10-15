import React from 'react';
import {pika, icon2} from "../assets/img/";

function ChatInput(){
  return(
    <>
      <input 
        placeholder="Tire sua duvida com o Pikassistent" 
        size="30" 
      /> 
      <button>enviar</button>
    </>
  );
}

function ChatMessage({ message, sender }){
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*if(sender === "robot"){
    return(
      <div>
        <img src="icon2.png" width="35"/>
        {message}
      </div>
    );
  }
    */

  return(
    <div>
      {sender === "robot" && (
        <img src={icon2} width="35"/>
      )}
      {message}
      {sender === "user" && (
        <img src={pika} width="30"/>
      )}
    </div>
  );
}

export default function ChatApp(){
  return(
    <div>
      <h1>
        Pikassistent
      </h1>
      <ChatInput />
      <ChatMessage 
        message="Ola chatbot" 
        sender="user" 
      />
      <ChatMessage 
        message="Ola humano" 
        sender="robot" 
      />
      <ChatMessage 
        message="qual o melhor inicial da priemeira geracao?" 
        sender="user" 
      />
      <ChatMessage 
        message="Bulbasauro, pois ele aprende ataques do tipo grama e veneno, que sao eficazes contra os outros dois iniciais." 
        sender="robot" 
      />
      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        <p>
          © 2025 Pikassistent — Pokémon e nomes de personagens são marcas registradas da Nintendo.
        </p>
      </footer>
    </div>
  );
}
