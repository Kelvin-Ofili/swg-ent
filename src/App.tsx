import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./interface";

const App: FC = () => {
	const [task, setTask] = useState<string>("");
	const [deadline, setDeadline] = useState<number>(0);
	const [todo, setTodo] = useState<ITask[]>([]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === "task") {
			setTask(event.target.value);
		} else {
			setDeadline(Number(event.target.value));
		}
	};

	const addTask = (): void => {
		const newTask = { taskName: task, deadline: deadline };
		setTodo([...todo, newTask]);
		setTask("");
		setDeadline(0);
	};

	const handleDelete = (taskNameDelete: string): void => {
		setTodo(
			todo.filter((task) => {
				return task.taskName !== taskNameDelete;
			})
		);
	};

	return (
		<div className="App">
			<div className="header">
				<div className="input-container">
					<input
						type="text"
						placeholder="Task..."
						name="task"
						value={task}
						onChange={handleChange}
					/>
					<input
						type="number"
						name="deadline"
						value={deadline}
						onChange={handleChange}
						placeholder="Deadline (in Days)..."
					/>
				</div>
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className="todo-list">
				{todo.map((task: ITask, key: number) => {
					return <TodoTask key={key} task={task} handleDelete={handleDelete} />;
				})}
			</div>
		</div>
	);
};

export default App;
