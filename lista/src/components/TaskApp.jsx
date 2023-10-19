import React, { useState } from 'react'
import ListaDeTarefas from './ListaDeTarefas'

export default function TaskApp() {

    const [tarefaConcluida, setTarefaConcluida] = useState([])

    return (
        <>
            <div>
                <h1>Lista de Tarefas Concluidas </h1>
            </div>
            <ListaDeTarefas
                setTarefaConcluida={setTarefaConcluida}
                tarefaConcluida={tarefaConcluida}
                lista={tarefaConcluida}
            />
        </>
    );
}
