import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
	type: string;
	label: string;
	placeholder: string;
	size: "full" | "half";
	onchange: any;
}

const Input: React.FC<InputProps> = ({
	type,
	label,
	placeholder,
	size,
	onchange,
}) => {
	return (
		<div
			className={
				size === "half"
					? `${styles.input} ${styles.halfInput}`
					: `${styles.input} ${styles.fullInput}`
			}
		>
			<label htmlFor="">{label}</label>
			<input type={type} placeholder={placeholder} onChange={onchange} />
		</div>
	);
};

interface TextAreaProps {
	label: string;
	onchange: any;
}

const TextArea: React.FC<TextAreaProps> = ({ label, onchange }) => {
	return (
		<div className={`${styles.input} ${styles.textArea}`}>
			<label htmlFor="">{label}</label>
			<textarea
				name=""
				id=""
				placeholder="Leave us a message"
				onChange={onchange}
			/>
		</div>
	);
};

export { Input, TextArea };
