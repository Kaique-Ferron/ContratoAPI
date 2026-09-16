import { useEffect, useState } from "react";

import FormProdutos from "./components/FormProdutos.jsx";
import ListaProdutos from "./components/ListaProdutos.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import {
  buscarProdutos,
  criarProdutos,
  excluirProdutos,
  atualizarProduto,
} from "./services/produtosService.js";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      setCarregando(true);
      setErro("");

      const dados = await buscarProdutos();

      setProdutos(dados);
    } catch (error) {
      console.error(error);
      setErro("Não foi possível carregar os produtos.");
    } finally {
      setCarregando(false);
    }
  }

  async function adicionarProduto(nome, preco) {
    try {
      setErro("");

      const novoProduto = await criarProdutos({
        nome: nome,
        preco: preco,
      });

      setProdutos((listaAtual) => [
        ...listaAtual,
        novoProduto,
      ]);
    } catch (error) {
      console.error(error);
      setErro("Não foi possível cadastrar o produto.");
    }
  }

  async function removerProduto(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este produto?"
    );

    if (!confirmar) {
      return;
    }

    try {
      setErro("");

      await excluirProdutos(id);

      setProdutos((listaAtual) =>
        listaAtual.filter((produto) => produto.id !== id)
      );
    } catch (error) {
      console.error(error);
      setErro("Não foi possível excluir o produto.");
    }
  }

  async function alterarProduto(produto) {
    try {
      setErro("");

      const produtoAtualizado = await atualizarProduto(
        produto.id,
        produto
      );

      setProdutos((listaAtual) =>
        listaAtual.map((item) =>
          item.id === produto.id
            ? produtoAtualizado
            : item
        )
      );
    } catch (error) {
      console.error(error);
      setErro("Não foi possível atualizar o produto.");
    }
  }

  return (
    <>
      <Header />

      <main className="container">
        <section className="apresentacao">
          <h1>Gerenciador de Produtos</h1>

          <p>
            React consumindo uma API com Express + MySQL
          </p>
        </section>

        <FormProdutos
          onAdicionar={adicionarProduto}
        />

        {erro && (
          <p className="erro">
            {erro}
          </p>
        )}

        {carregando ? (
          <p>Carregando...</p>
        ) : (
          <ListaProdutos
            Produtos={produtos}
            onExcluir={removerProduto}
            onAlterar={alterarProduto}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
