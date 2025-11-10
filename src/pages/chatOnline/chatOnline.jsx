import { useState, useEffect } from "react";
import "./chatOnline.css";
import { masterBall } from "../../assets/img";

export default function ChatOnline() {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("chatMessages") || "[]");
  });
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const updated = [...messages, { text: input, time: Date.now() }];
    setMessages(updated);
    localStorage.setItem("chatMessages", JSON.stringify(updated));
    setInput("");
  };

  return (
    <div className="chat-page">
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className="chat-message">
            <img src={masterBall} />
            {m.text}
          </div>
        ))}
      </div>
      <div className="chat-input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          className="chat-input"
        />
        <button onClick={sendMessage} className="chat-send">
          Send
        </button>
      </div>
    </div>
  );
}
