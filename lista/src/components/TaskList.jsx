import React, { useState, useEffect } from 'react';
import './lista.css';

function TaskList({ setTarefaConcluida }) {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  const [itemConcluido, setItemConcluido] = useState([]);

  useEffect(() => {
    setLista(["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4"]);
  }, []);

  function adicionarNovoItem() {
    if (novoItem.trim() !== "") { 
      setLista([...lista, novoItem]);
      setNovoItem(""); 
    }
  }

  function deletarItem(index) {
    const tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  }

  function listaConcluidos(event, item) {
    if (event.target.checked) {
      setItemConcluido([...itemConcluido, item]);
      setTarefaConcluida([...itemConcluido, item]);
    } else {
      setItemConcluido(itemConcluido.filter((concluido) => concluido !== item));
      setTarefaConcluida(itemConcluido.filter((concluido) => concluido !== item));
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
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <input type="checkbox" onChange={(event) => listaConcluidos(event, item)} />
            {item}
            <button onClick={() => deletarItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
