import { TopTitle } from "components/topTitle";
import React from "react";
import styles from "./styles.module.scss";
import {
	twoguys,
	travis,
	diskjockey,
	headphones,
	shadesgirl,
	chainsguy,
} from "assets";

const GalleryUI = () => {
	const imageGallery = [
		diskjockey,
		twoguys,
		headphones,
		shadesgirl,
		travis,
		chainsguy,
	];

	return (
		<div>
			<div className={styles.top}>
				<TopTitle text="AMAPIANO ASYLUM 1.0" position={true} />
			</div>
			<div className={styles.backGround}>
				<div className={styles.imageGrid}>
					{imageGallery.map((image) => (
						<div key={image} className={styles.photo}>
							<img src={image} alt="" className={styles.photo__img} />
						</div>
					))}
				</div>
			</div>
			{/* <TopTitle text="KING MANNY" position={false} />
			<div className={styles.backGround}>
				<div className={styles.imageGrid}>
					{imageGallery.map((image) => (
						<img src={image} alt="" key={image} className={styles.photo} />
					))}
				</div>
			</div> */}
		</div>
	);
};

export { GalleryUI };
