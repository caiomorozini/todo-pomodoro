import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITask } from "../../types/task";
class Form extends React.Component<{
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
	state = {
		task: "",
		time: "00:00"
	}

	addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.props.setTasks((prev) => [...prev, this.state]);
		this.setState({ task: "", time: "00:00" });
	}
	render() {
		return (
			<form className={style.newTask} onSubmit={this.addTask.bind(this)}>
				<div className={style.inputContainer}>
					<label>
						Name
					</label>
					<input
						type="text"
						name="task"
						id="task"
						placeholder="write a task"
						value={this.state.task}
						onChange={(e) => this.setState({ task: e.target.value })}

						required
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="time">
						Time
						<input
							type="time"
							step="1"
							name="time"
							id="time"
							value={this.state.time}
							onChange={(e) => this.setState({ ...this.state, time: e.target.value })}
							min="00:00:00"
							max="01:30:00"
							required
						/>
					</label>
				</div>
				<Button
					text="Add"
				/>
			</form>
		);
	}
}

export default Form;