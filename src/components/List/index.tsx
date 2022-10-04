import { ITask } from '../../types/task';
import style from './list.module.scss';
import Item from './Item';


function List( { tasks }: { tasks: ITask[]} ) {

	return <aside className={style.taskList}>
		<h2>Tasklist</h2>
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