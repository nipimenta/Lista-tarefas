import React, { useState, useEffect } from 'react';
import './lista.css';
import App from '../App';
import ListaDeTarefas from './ListaDeTarefas'

function TaskList({ setTarefaConcluida }) {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  const [itemConcluido, setItemConcluido] = useState([]);
  /* const [pages, setPages] = useState(0); */

  useEffect(() => {
    setLista(["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4"]);
  }, []);

  function adicionarNovoItem() {
    setLista([...lista, novoItem]);
  }

  function deletarItem(index) {
    const tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  }

  function listaConcluidos(event, item) {
    if (event.target.checked) {
      console.log(itemConcluido);
      setItemConcluido([...itemConcluido, item]);
      setTarefaConcluida([...itemConcluido, item])
    } else {
      console.log("desativou");
    }
  }

  function retornarPagina() {
    window.location.href = '/';
  }

  return (
    <>
      <button onClick={retornarPagina}>Voltar</button>
      <input value={novoItem} onChange={(event) => setNovoItem(event.target.value)} type="text" />
      <button onClick={adicionarNovoItem}>Adicionar</button>
      <ListaDeTarefas
        lista={lista}
      />
    </>
  );
}

export default TaskList;
