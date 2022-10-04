import React from "react";
import style from './list.module.scss';

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
    return <aside className={style.listaTarefas}>
        <h2>Lista de tarefas</h2>
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className={style.item}>
                    <h3> {task.tarefa} </h3>
                    <span> {task.horario} </span>
                </li>
            ))}

        </ul>

    </aside>;
}

export default List;