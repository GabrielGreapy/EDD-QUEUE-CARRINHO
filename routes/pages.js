const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const caminhoCarrinho = path.join(__dirname, "..", "carrinho.json");

router.post("/carrinho", (req, res) => {
  router.post("/carrinho", (req, res) => {
    console.log("Recebido:", req.body); 

    });
  
  const { id, nome, preco } = req.body;

  fs.readFile(caminhoCarrinho, "utf8", (err, data) => {
    if (err) return res.status(500).json({ erro: "Erro ao ler o carrinho." });

    let carrinho = JSON.parse(data);

    const existente = carrinho.find(p => p.id === id);
    if (existente) {
      existente.quantidade += 1;
    } else {
      carrinho.push({ id, nome, preco, quantidade: 1 });
    }

    fs.writeFile(caminhoCarrinho, JSON.stringify(carrinho, null, 2), err => {
      if (err) return res.status(500).json({ erro: "Erro ao salvar no carrinho." });

      res.status(200).json({ mensagem: "Produto adicionado com sucesso!" });
    });
  });
});

module.exports = router;
