import { useState } from "react";

function FormProdutos({ onAdicionar }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  function enviar(event) {
    event.preventDefault();

    const nomeLimpo = nome.trim();
    const precoLimpo = preco.trim();

    if (!nomeLimpo || !precoLimpo) {
      return;
    }

    onAdicionar(nomeLimpo, precoLimpo);

    setNome("");
    setPreco("");
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      
      <input
        type="text"
        placeholder="Digite o nome do produto"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <input
        type="number"
        step="0.01"
        placeholder="Digite o preço"
        value={preco}
        onChange={(event) => setPreco(event.target.value)}
      />

      <button type="submit">
        Adicionar
      </button>

    </form>
  );
}

export default FormProdutos;
