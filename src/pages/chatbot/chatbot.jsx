/* eslint-disable no-irregular-whitespace */
import React from 'react';
import masterBall from "../../assets/img/masterBall.png";
import pika from "../../assets/img/pika.png";
import logo from "../../assets/img/logo.jpeg";
import './chatbot.css';

function ChatInput({ chatMessages, setChatMessages }){
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
        }];

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
        <div className='input-area'>
            <input 
                className='input-container'
                //placeholder="Tire sua duvida com o Pikassistent" 
                onChange = {saveInputText}
                value = {inputText}
            /> 
            <button
                className='chat-button'
                onClick = {sendMessage}
            >enviar</button>
        </div>
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
        <div className={
        sender === "robot" 
        ? "chat-message-robot" 
        : "chat-message-user"
        }>
            {sender === "robot" && (
                <img src={pika} style={{ width: "35px" }}/>
            )}
            <div className={
                sender === "robot" 
                ? "chat-message-text robot-text" 
                : "chat-message-text user-text"
            }>
                {message}
            </div>
            {sender === "user" && (
                <img src={masterBall} style={{ width: "30px" }}/>
            )}
        </div>
    );
}

function ChatMessages({ chatMessages }){


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
    );
}

function ChatApp(){

    const [chatMessages, setChatMessages] =  React.useState( [{
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
        <div className="chat-app">
            <h1>
                <img src={logo} style={{ width: "300px", height: "auto", verticalAlign: "middle" }} />
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