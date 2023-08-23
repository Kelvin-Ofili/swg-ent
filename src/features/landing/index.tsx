import React from "react";
import styles from "./styles.module.scss";
import { amapiano, scrollingVideo } from "assets";
import { backgroundVideo } from "assets";

const LandingPageUI = () => {
	return (
		<div className={styles.videoContainer}>
			<video autoPlay muted loop className={styles.video}>
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<video autoPlay muted loop className={styles.scrollVideo}>
				<source src={scrollingVideo} type="video/mp4" />
			</video>
			<div className={styles.overlay}>
				<img src={amapiano} alt="" className={styles.titleImage} />
				<a href="" className={styles.bookings}>
					GET TICKET
				</a>
			</div>
		</div>
	);
};

export { LandingPageUI };
