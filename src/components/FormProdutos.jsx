import { useState } from "react";

function FormProdutos({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");

  function enviar(event) {
    event.preventDefault();

    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      return;
    }

    onAdicionar(tituloLimpo);
    setTitulo("");
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <input
        type="text"
        placeholder="Digite uma Produtos"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default FormProdutos;
