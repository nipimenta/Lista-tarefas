import React, { useState } from 'react';
import TaskApp from './components/TaskApp';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  const [pages, setPages] = useState(0);

  const LinkPages = (p) => {
    setPages(p);
  }

  const retornarPagina = () => {
    if (pages === 1) {
      return <TaskList />;
    } else if (pages === 2) {
      return <TaskApp />;
    } else {
      return (
        <div>
          <button onClick={() => LinkPages(1)}>Tarefas a Fazer</button>
          <button onClick={() => LinkPages(2)}>Tarefas Concluídas</button>
        </div>
      );
    }
  }

  return (
    <>
      {retornarPagina()}
      
    </>
  );
}
