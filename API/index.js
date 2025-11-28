const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 7070;

app.use(
cors({
    origin: [
      "http://localhost:8100/",
      "http://localhost:3000/",
      "http://localhost:7070/",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

let messages = [
  {
    "id": crypto.randomUUID(),
    "text": "Oi, tudo bem?"
  }
]


app.get("/api/getMessage", (req, res) => {
  res.status(200).json({success: true, data: messages});
});




app.post("/api/postMessage", (req, res) => {
  try {
    const {id, message} = req.body;
    if(!id || !message) {
      return res.status(400).json({
        success: false,
        error: "id ou mensagem faltando."
      });
    }

    messages.push({ id, text: message });
    res.status(200).json({success:true});
  }
  catch(error) {
    res.status(400).json({success:false, error: error});
  }
});

app.post("/api/chat", async (req, res) => {
  try {
    console.log("🔍 HEADERS:", req.headers);
    console.log("🔍 BODY:", req.body);
    console.log("🔍 Body type:", typeof req.body);
    console.log("🔍 Body keys:", Object.keys(req.body));

    const { message } = req.body;
    console.log("🔍 Message:", message);
  

    if(!message) {
      console.error("Mensagem faltando no corpo da requisição.");
      return res.status(400).json({
        success: false,
        error: "Mensagem faltando."
      });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Você é o Pikassistent, um expert em Pokémon da 1ª geração. Seja calmo, paciente e responda em português com o humor de um fã."
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 1024,
      stream: false
    });

    const botResponse = completion.choices[0].message.content;

    res.status(200).json({
      success: true,
      response: botResponse
    });

  }catch(error) {
    console.error("Error generating chat completion:", error);
    res.status(400).json({success:false, error: error.message});
  }
}); 


app.listen(PORT, () => {
  console.log(`🚀 App listening on the port: http://localhost:${PORT} `);
  console.log('📊 Database connected')
});