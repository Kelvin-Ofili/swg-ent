import React from "react";
import { ITask } from "../interface";
// import {handleDelete}

interface Props {
    task: ITask;
    handleDelete(taskNameDelete: string): void;
}
const TodoTask = ({ task, handleDelete }: Props) => {
	return (
		<div className="task">
			<div className="content">
				<span>{task?.taskName}</span>
				<span>{task?.deadline}</span>
			</div>
			<button onClick={() => handleDelete(task?.taskName)}>X</button>
		</div>
	);
};

export default TodoTask;
