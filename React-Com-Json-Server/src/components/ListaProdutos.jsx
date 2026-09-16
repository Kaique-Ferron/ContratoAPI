function ListaProdutos({
  Produtos,
  onExcluir,
  onAlterar,
}) {
  if (Produtos.length === 0) {
    return (
      <p>
        Nenhum produto cadastrado.
      </p>
    );
  }

  return (
    <section className="lista">
      {Produtos.map((produto) => (
        <article
          className="Produto"
          key={produto.id}
        >
          <div>
            <h2>
              {produto.nome}
            </h2>

            <span>
              R${" "}
              {Number(produto.preco).toFixed(2)}
            </span>
          </div>

          <div className="acoes">
            <button
              type="button"
              onClick={() => {
                const novoNome = window.prompt(
                  "Nome do produto:",
                  produto.nome
                );

                if (novoNome === null) {
                  return;
                }

                const novoPreco = window.prompt(
                  "Preço do produto:",
                  produto.preco
                );

                if (novoPreco === null) {
                  return;
                }

                onAlterar({
                  ...produto,
                  nome: novoNome,
                  preco: Number(novoPreco),
                });
              }}
            >
              Editar
            </button>

            <button
              type="button"
              className="botao-excluir"
              onClick={() =>
                onExcluir(produto.id)
              }
            >
              Excluir
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ListaProdutos;
