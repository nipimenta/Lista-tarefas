import { useState } from "react"
import { useEffect } from "react"

function ListaDeTarefas({ lista, tarefaConcluida, setTarefaConcluida }) {

    const [teste, setTeste] = useState()

    const passarItem = (item) => {
        setTarefaConcluida(item)
    }

    console.log(teste)

    return (
        <>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            id={`check-${index}`}
                            onChange={(event) => passarItem(item, event)}
                        />
                        {item}
                        <button onClick={() => deletarItem(index)}>
                            Deletar
            </button>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default ListaDeTarefas