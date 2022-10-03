import React from "react";

function List() {
    const tasks = [
        {
            tarefa: "Estudar React",
            horario: "10:00",
        },
        {
            tarefa: "Estudar NEXT",
            horario: "12:00",
        }
    ];
    return <aside>
        <h2>Lista de tarefas</h2>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <h3> {task.tarefa} </h3>
                    <span> {task.horario} </span>
                </li>
            ))}

        </ul>

    </aside>;
}

export default List;