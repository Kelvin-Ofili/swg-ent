import React from "react";
import styles from "./styles.module.scss";
import { Circle, title } from "../../assets/vectors";
import { backgroundVideo } from "../../assets/video";

const HeaderUI = () => {
	return (
		<div className={styles.videoContainer}>
			<video autoPlay muted loop className={styles.video}>
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<div className={styles.overlay}>
				<img src={title} alt="" className={styles.titleImage} />
				<a href="" className={styles.bookings}>
					GET A RESERVATION
				</a>
				<Circle className={styles.circle} />
			</div>
		</div>
	);
};

export { HeaderUI };
