import React from "react";
import Button from "../button";
import style from './Form.module.scss';
class Form extends React.Component {
	render() {
		return (
			<form className={style.newTask}>
				<div className={style.inputContainer}>
					<label>
						Name
					</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						placeholder="O que estudar"
						required
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="tempo">
						Time
						<input
							type="time"
							step="1"
							name="tempo"
							id="tempo"
							min="00:00:00"
							max="01:30:00"
							required
						/>
					</label>
				</div>
				<Button
					text="Adicionar"
				/>
			</form>
		);
	}
}

export default Form;