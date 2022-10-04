import React from "react";
import style from './list.module.scss';
import Item from './Item';

function List() {
    const tasks = [
        {
            task: "Estudar React",
            time: "10:00",
        },
        {
            task: "Estudar NEXT",
            time: "12:00",
        }
    ];
    return <aside className={style.listaTarefas}>
        <h2>Lista de tarefas</h2>
        <ul>
            {tasks.map((item, index) => (
                <Item
                    key={index}
                    {...item}
                />
            ))}

        </ul>

    </aside>;
}

export default List;