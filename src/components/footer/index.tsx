import React from "react";
import styles from "./styles.module.scss";
import { swg, facebookIcon, twitterIcon, instagramIcon } from "assets";

const FooterUI = () => {
	return (
		<div className={styles.footerDiv}>
			<div className={styles.socialsDiv}>
				<img src={twitterIcon} alt="" className={styles.socialsDiv__icon} />
				<img src={facebookIcon} alt="" className={styles.socialsDiv__icon} />
				<img src={instagramIcon} alt="" className={styles.socialsDiv__icon} />
			</div>
			<img src={swg} alt="" className={styles.swg} />
			<p>© 2023 Seven Wise Global. </p>
		</div>
	);
};

export { FooterUI };
