import React from "react";
import styles from "./styles.module.scss";
import { swg } from "assets";

const FooterUI = () => {
	return (
		<div>
			<div className={styles.socialsDiv}></div>
			<img src={swg} alt="" />
			<p>2023 Seven Wise Global</p>
		</div>
	);
};

export { FooterUI };
