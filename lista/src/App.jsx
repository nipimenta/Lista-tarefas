import React, { useState, useEffect } from 'react';
import './App.css';

function App({ setTarefaConcluida }) {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  const [itemConcluido, setItemConcluido] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

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
      setTarefasConcluidas([...tarefasConcluidas, item]);
      const tmpArray = [...lista];
      tmpArray.splice(lista.indexOf(item), 1);
      setLista(tmpArray);
    } else {
      setItemConcluido(itemConcluido.filter((concluido) => concluido !== item));
      setTarefasConcluidas(tarefasConcluidas.filter((concluido) => concluido !== item));
    }
  }

  return (
    <>
    <h2>Tarefas a Fazer:</h2>
      <input value={novoItem} onChange={(event) => setNovoItem(event.target.value)} type="text" />
      <button onClick={adicionarNovoItem}>Adicionar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={(event) => listaConcluidos(event, item)}
            />
            {item}
            <button onClick={() => deletarItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
      <h2>Tarefas Concluídas:</h2>
      <ul>
        {tarefasConcluidas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
