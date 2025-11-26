// fazer o POST e trata a resposta 

async function userMessage() {
    try {
      const resp = await fetch("https://localhost:7070/api/userMsg", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userMessageData),
      });

      

      // valida/trata a resposta

      if (resp.status == 200) {
        const data = await resp.json();
        userMessage.message
        localStorage.setItem("message", JSON.stringify(data));

        return { success: true, data };
      } else {
        const errorText = await resp.text();
        console.error("Erro da API:", errorText);

        return { success: false, error: errorText };
      }
    } catch (err) {
      console.error("Erro de conexão:", err);

      return { success: false, error: "Erro de conexão com o servidor" };
    }
  }

  // colocar isso no pikassistent chatOnline