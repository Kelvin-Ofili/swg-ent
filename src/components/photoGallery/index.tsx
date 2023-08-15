import React from "react";
import styles from "./styles.module.scss";
import { odumodu, smada, teni, friends, couple, selfie } from "../../assets";

const PhotoGalleryUI = () => {
	const imageGallery = [odumodu, couple, friends, teni, smada, selfie];
	return (
		<div className={styles.backGround}>
			<div className={styles.innerDiv}>
				<h1 className={styles.swg}>SWG 2021</h1>
				<div className={styles.imageGrid}>
					{imageGallery.map((image) => (
						<img src={image} alt="" key={image} className={styles.photo} />
					))}
				</div>
			</div>
		</div>
	);
};
export { PhotoGalleryUI };
