import React, { useState } from "react";
import style from './list.module.scss';
import Item from './Item';

function List() {
	const [tasks, setTasks] = useState([{
		 	task: "task1",
			time: "00:00:00"
		}, {
			task: "task2",
			time: "00:00:00"
		}, {
			task: "task3",
			time: "00:00:00"
		}]);
	return <aside className={style.taskList}>
		<h2 onClick={() => {

			setTasks([...tasks, { task: "Estudar React", time: "01:00:00" }])
		}}>Tasklist</h2>
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