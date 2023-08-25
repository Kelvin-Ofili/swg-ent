import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
	text: string;
	className?: any;
	available: "open" | "closed" | "none";
	onClick: any;
}

const Button: React.FC<ButtonProps> = ({
	text,
	className,
	available,
	onClick,
}) => {
	return (
		<>
			<button
				className={`${styles.bookings} ${className} ${styles[available]}`}
				onClick={onClick}
			>
				<span>{text}</span>
			</button>
		</>
	);
};

export { Button };
