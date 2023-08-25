import React from "react";
import styles from "./styles.module.scss";
import { amapiano, scrollingVideo } from "assets";
import { backgroundVideo } from "assets";
import { Button } from "components";

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
				<Button
					text="GET TICKET"
					className={styles.higherBtn}
					available="open"
					onClick={() => {}}
				/>
			</div>
		</div>
	);
};

export { LandingPageUI };
