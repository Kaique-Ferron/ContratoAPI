const URL_API = "http://localhost:3000/produtos";

export async function buscarTarefas() {
  const resposta = await fetch(URL_API);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return await resposta.json();
}

export async function criarProdutos(produtos) {
  const resposta = await fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produtos),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao criar produtos");
  }

  return await resposta.json();
}

export async function excluirTarefa(id) {
  const resposta = await fetch(`${URL_API}/${id}`, {
    method: "DELETE",
  });

  if (!resposta.ok) {
    throw new Error("Erro ao excluir produtos");
  }
}

export async function atualizarStatus(id, concluida) {
  const resposta = await fetch(`${URL_API}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      concluida,
    }),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao atualizar produtos");
  }

  return await resposta.json();
}
