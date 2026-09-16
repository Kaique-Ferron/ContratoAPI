import { useEffect, useState } from "react";
import FormTarefa from "./components/FormProdutos.jsx";
import ListaProdutos from "./components/ListaProdutos.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import {
  buscarProdutos,
  criarTarefa,
  excluirTarefa,
  atualizarStatus,
} from "./services/produtosService.js";

function App() {
  const [Produtos, setProdutos] = useState([]);
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
      setErro(
        "Não foi possível carregar as produtos. Verifique se o JSON Server está rodando.",
      );
    } finally {
      setCarregando(false);
    }
  }

  async function adicionarProdutos(titulo) {
    try {
      setErro("");

      const novaProdutos = await criarProdutos({
        titulo: titulo,
        concluida: false,
      });

      setProdutos((listaAtual) => [...listaAtual, novaProdutos]);
    } catch (error) {
      console.error(error);
      setErro("Não foi possível cadastrar a produtos.");
    }
  }

  async function removerProdutos(id) {
    // Pede confirmação antes de excluir
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta produtos?",
    );

    // Se clicar em Cancelar, interrompe a função
    if (!confirmar) {
      return;
    }

    try {
      setErro("");

      // DELETE na API
      await excluirTarefa(id);

      // Remove a tarefa do estado
      setProdutos((listaAtual) =>
        listaAtual.filter((produtos) => produtos.id !== id),
      );
    } catch (error) {
      console.error(error);

      setErro("Não foi possível excluir a tarefa.");
    }
  }

  async function alterarTarefa(produtos) {
    try {
      setErro("");

      const produtosAtualizada = await atualizarStatus(
        produtos.id,
        !produtos.concluida,
      );

      setProdutos((listaAtual) =>
        listaAtual.map((item) =>
          item.id === produtos.id ? produtosAtualizada : item,
        ),
      );
    } catch (error) {
      console.error(error);
      setErro("Não foi possível alterar a produtos.");
    }
  }

  return (
    <>
      <Header />

      <main className="container">
        <section className="apresentacao">
          <h1>Gerenciador de Produtos</h1>

          <p>React consumindo uma API simulada com JSON Server</p>
        </section>

        <FormProdutos onAdicionar={adicionarProdutos} />

        {erro && <p className="erro">{erro}</p>}

        {carregando ? (
          <p>Carregando...</p>
        ) : (
          <ListaProdutos
            Produtos={produtos}
            onExcluir={removerProdutos}
            onAlterar={alterarProdutos}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
