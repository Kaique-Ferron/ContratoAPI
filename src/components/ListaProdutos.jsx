function ListaProdutos({ Produtos, onExcluir, onAlterar }) {
  if (produtos.length === 0) {
    return <p>Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <section className="lista">
      {produtos.map((produtos) => (
        <article className="tarefa" key={produtos.id}>
          <div>
            <h2 className={produtos.concluida ? "concluida" : ""}>
              {produtos.titulo}
            </h2>

            <span>
              {produtos.concluida ? "Concluída" : "Pendente"}
            </span>
          </div>

          <div className="acoes">
            <button
              type="button"
              onClick={() => onAlterar(produtos)}
            >
              {produtos.concluida ? "Reabrir" : "Concluir"}
            </button>

            <button
              type="button"
              className="botao-excluir"
              onClick={() => onExcluir(produtos.id)}
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
