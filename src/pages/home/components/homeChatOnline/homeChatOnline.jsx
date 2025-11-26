import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homeChatOnline.css";

export default function homeChatOnline() {
  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("chatMessages") || "[]");
    setPreview(stored.slice(0));
  }, []);

  return (
    <div className="home-page">
      <div className="chat-preview" onClick={() => navigate("/chat")}>
        {preview.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          preview.map((m, i) => 
            <>
              <p key={i}>{m.text}</p>
            </>
          ))}
      </div>
    </div>
  );
}

// ta faltando a imagem do usuario nas mensagens