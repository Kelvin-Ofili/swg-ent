import React from "react";
import styles from "./styles.module.scss";
import { summerFest } from "../../assets/vectors";
import { backgroundVideo } from "../../assets/video";

const HeaderUI = () => {
  return (
    
		<div className={styles.videoContainer}>
			<video autoPlay muted loop className={styles.video}>
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<div className={styles.overlay}>
				<h1>THE</h1>
				<div>
					<h1>BIGGEST </h1>
					<img src={summerFest} alt="" />
					<h1>IN CYPRUS </h1>
				</div>
			</div>
		</div>
	);
};

export { HeaderUI };
