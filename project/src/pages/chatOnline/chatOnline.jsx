import { useState, useEffect } from "react";
import "./chatOnline.css";
import { masterBall } from "../../assets/img";
import { db } from "../../assets/firebase";


export default function ChatOnline() {

  const [response, setResponse] = useState();
  const [messageData, setMessageData] = useState(null);
  const [inputM, setInput] = useState("");

  // const [messages, setMessages] = useState(() => {
  //   return JSON.parse(localStorage.getItem("chatMessages") || "[]");
  // });

const getMessage = async () => {
    try {
      const resp = await fetch('http://localhost:7070/api/getMessage');
      if(resp.ok) {
        const data = await resp.json();
        if(data.success) {
          setResponse(data.data);
        }
      }
    }
    catch(error) {
      console.error('There was a problem with the fetch operation:', error);
    };
  }


  // const sendMessage = () => {
  //   if (!inputM.trim()) return;
  //   const updated = [...messages, { text: inputM, time: Date.now() }];
  //   setMessages(updated);
  //   localStorage.setItem("chatMessages", JSON.stringify(updated));
  //   setInput("");
  // };

  useEffect(() => {
    getMessage();
  }, []);

  useEffect(() => {
    setMessageData({
      id: "123",
      message: inputM
    });
  }, [inputM]);

  const backendPush = async () => {
    try {
      const resp = await fetch('http://localhost:7070/api/postMessage', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });
      
      const data = await resp.json()
      
      if(resp.status == 200) {
        setMessageData(data);
      }
      else {
        console.log(data.error);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="chat-page">
      <div className="chat-window">
        {response ? response.map((m, i) => (
          <div key={i} className="chat-message">
            <img src={masterBall} />
            {m.text}
          </div>
        )) : null }
      </div>
      <div className="chat-input-row">
        <input
          value={inputM}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          className="chat-input"
        />
        <button onClick={() => {backendPush()}} className="chat-send">
          Send
        </button>
      </div>
    </div>
  );
}
