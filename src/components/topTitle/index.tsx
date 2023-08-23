import React from "react";
import styles from "./styles.module.scss";
import { star } from "assets";

interface TopTitleProps {
	text: string;
	position: boolean;
}

const TopTitle: React.FC<TopTitleProps> = ({ text, position }) => {
	return (
		<div
			className={
				position === true
					? styles.container
					: `${styles.reversedContainer} ${styles.container}`
			}
		>
			<div className={styles.title}>
				<h1>{text}</h1>
			</div>
			<div className={styles.stars}>
				<img src={star} alt="" className={styles.star} />
				<img src={star} alt="" className={styles.star} />
				<img src={star} alt="" className={styles.star} />
			</div>
		</div>
	);
};

export { TopTitle };
