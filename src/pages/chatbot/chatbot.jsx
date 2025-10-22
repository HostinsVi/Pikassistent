import React from 'react';
import pika from "../../assets/img/pika.png";
import icon2 from "../../assets/img/icon2.png";



function ChatInput(chatMessages, setChatMessages){
  const [inputText, setInputText] = React.useState('')

  function saveInputText(event){
    setInputText(event.target.value)
  }

  function sendMessage(){
    const newChatMessages = [
    ...chatMessages,
    {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID()
    }]

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
    ...newChatMessages,
    {
      message: response,
      sender: "robot",
      id: crypto.randomUUID()
    }]);

    setInputText('');
  }

  return(
    <>
      <input 
        placeholder="Tire sua duvida com o Pikassistent" 
        size="30" 
        onChange = {saveInputText}
        value = {inputText}
      /> 
      <button
        onClick = {sendMessage}
      >enviar</button>
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

function ChatMessages(chatMessages){


  return(
    <>
        {chatMessages.map((chat) => {
        return (
          <ChatMessage 
            message={chat.message} 
            sender={chat.sender} 
            key={chat.id}
          />
        );
      })}
      </>
    )
}

function ChatApp(){

  const [chatMessages, setChatMessages] =  React.useState( [{
    message: "Ola chatbot",
    sender: "user",
    id: '1'
  },{
    message: "Ola humano",
    sender: "robot",
    id: '2'
  } ,{
    message: "qual o melhor inicial da priemeira geracao?",
    sender: "user",
    id: '3'
  },{
    message: "Bulbasauro, pois ele aprende ataques do tipo grama e veneno, que sao eficazes contra os outros dois iniciais.",
    sender: "robot",
    id: '4'
  }]);
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  return(
    <div>
      <h1>
        Pikassistent
      </h1>
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages 
      chatMessages={chatMessages}
      />
      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        <p>
          © 2025 Pikassistent — Pokémon e nomes de personagens são marcas registradas da Nintendo.
        </p>
      </footer>
    </div>
  );
}

export default ChatApp