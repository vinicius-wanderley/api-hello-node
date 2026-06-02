const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: "API do Vinicius no ar! 🚀",
    stack: "Node.js + Express",
    objetivo: "Vaga Backend Jr PcD",
    status: "Em desenvolvimento constante",
    data: new Date().toLocaleDateString('pt-BR')
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
