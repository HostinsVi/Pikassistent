import { useState, useEffect } from "react";
import "./chatOnline.css";
import { masterBall } from "../../assets/img";

export default function ChatOnline() {
  const [response, setResponse] = useState();
  const [messageData, setMessageData] = useState(null);
  const [inputM, setInputM] = useState("");
  const userID = 123;
  const [userName, setUserName] = useState("testUser");

  // ------------------ Funções -------------------

  const getMessage = async () => {
    try {
      const resp = await fetch("http://localhost:7070/api/getMessage");
      if (resp.ok) {
        const data = await resp.json();
        if (data.success) {
          setResponse(data.data);
        }
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const backendPush = async () => {
    try {
      const resp = await fetch("http://localhost:7070/api/postMessage", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      const data = await resp.json();
      
      if (resp.status == 200) {
        setMessageData(data);
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async () => {
    if (!inputM.trim()) return;

    await backendPush();
    setInputM(""); // limpar input
    
    getMessage();
  };

  // ------------------ useEffects -------------------

  useEffect(() => {
    getMessage();

    // Atualização automática das mensagens a cada 5 segundos
    const interval = setInterval(() => {
      getMessage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMessageData({
      id: userID,
      message: inputM,
      senderName: userName
    });
  }, [inputM, userName]);

  return (
    <main className="chat-page">
      <section className="chatWindow_container">
        <section className="chat-window">
          {response
            ? response.map((m, i) => (
                <div key={i} className={`chatMessage_container ${m.senderName === userName ? 'current-user' : null}`}>
                  <img src={masterBall} />
                  <aside className={`chatMessage_content ${m.senderName === userName ? 'current-user_text' : null}`}>
                    <p className="senderName_text">{m.senderName ? m.senderName : "Usuário não identificado"}</p>
                    <p>{m.text}</p>
                  </aside>
                </div>
              ))
            : null}
        </section>
      </section>
      <form className="chat-input-row" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
        <input
          value={inputM}
          onChange={(e) => setInputM(e.target.value)}
          placeholder="Type message..."
          className="chat-input"
        />
        <button
          type="submit"
          className="chat-send"
        >
          Send
        </button>
      </form>
    </main>
  );
}
