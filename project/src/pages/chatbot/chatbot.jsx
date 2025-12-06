/* eslint-disable no-irregular-whitespace */
import React from "react";
import masterBall from "../../assets/img/masterBall.png";
import pika from "../../assets/img/pika.png";
import "./chatbot.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    console.log("enviando mensagem: ", inputText);
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    console.log("novas mensagens: ", newChatMessages);

    setChatMessages(newChatMessages);
    /*
        const response = Chatbot.getResponse(inputText);
        setChatMessages([
        ...newChatMessages,
        {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
        }]);
*/
    setInputText("");

    console.log("enviando para o backend");

    fetch("http://localhost:7070/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: inputText,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.response);
          setChatMessages([
            ...newChatMessages,
            {
              message: data.response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);
        } else {
          setChatMessages([
            ...newChatMessages,
            {
              message:
                "Desculpe, estou com problemas para responder agora. tente novamente mais tarde.",
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setChatMessages([
          ...newChatMessages,
          {
            message:
              "erro ao conectar com o servidor. tente novamente mais tarde.",
            sender: "robot",
            id: crypto.randomUUID(),
          },
        ]);
      });
  }

  return (
    <div className="input-area">
      <input
        className="input-container"
        //placeholder="Tire sua duvida com o Pikassistent"
        onChange={saveInputText}
        value={inputText}
      />
      <button className="chat-button" onClick={sendMessage}>
        enviar
      </button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
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

  return (
    <div
      className={
        sender === "robot" ? "chat-message-robot" : "chat-message-user"
      }
    >
      {sender === "robot" && <img src={pika} style={{ width: "35px" }} />}
      <div
        className={
          sender === "robot"
            ? "chat-message-text robot-text"
            : "chat-message-text user-text"
        }
      >
        {message}
      </div>
      {sender === "user" && <img src={masterBall} style={{ width: "30px" }} />}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  return (
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

function ChatApp() {
  const [chatMessages, setChatMessages] = React.useState([]);
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  return (
    <>
      <div className="chat-app">
        <ChatMessages chatMessages={chatMessages} />
      </div>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default ChatApp;
