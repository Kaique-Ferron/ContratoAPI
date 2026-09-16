const URL_API = "http://localhost:3000/produtos";

// GET - buscar produtos
export async function buscarProdutos() {
  const resposta = await fetch(URL_API);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return await resposta.json();
}

// POST - criar produto
export async function criarProdutos(produto) {
  const resposta = await fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: produto.nome,
      preco: produto.preco,
    }),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao criar produto");
  }

  const dados = await resposta.json();

  return dados.produto;
}

// PUT - atualizar produto
export async function atualizarProduto(id, produto) {
  const resposta = await fetch(`${URL_API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: produto.nome,
      preco: produto.preco,
    }),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao atualizar produto");
  }

  const dados = await resposta.json();

  return dados.produto;
}

// DELETE - excluir produto
export async function excluirProdutos(id) {
  const resposta = await fetch(`${URL_API}/${id}`, {
    method: "DELETE",
  });

  if (!resposta.ok) {
    throw new Error("Erro ao excluir produto");
  }

  return await resposta.json();
}
