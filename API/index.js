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

app.listen(PORT, () => {
  console.log(`🚀 App listening on the port: http://localhost:${PORT} `);
  console.log('📊 Database connected')
});