import React from 'react';
import { ITask } from '../../types/task';
import Item from './Item';
import style from './List.module.scss';

interface Props {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void
}


function Lista({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map(item => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;