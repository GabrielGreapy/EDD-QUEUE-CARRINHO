const produtos = [
  { id: 1, nome: "Red Dead Redemption 2", preco: 20.00 },
  { id: 2, nome: "League of Legends", preco: 20.00 }
];

function renderProdutos() {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = "";

  produtos.forEach(prod => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <strong>${prod.nome}</strong> - R$${prod.preco.toFixed(2)}
      <button onclick='adicionarCarrinho(${JSON.stringify(prod)})'>Adicionar</button>
    `;
    container.appendChild(div);
  });
}

function adicionarCarrinho(prod) {
  fetch("/api/carrinho", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(prod)
  })
    .then(res => res.json())
    .then(data => alert(data.mensagem || "Adicionado com sucesso!"))
    .catch(err => alert("Erro ao adicionar"));
}

renderProdutos();
