import React from "react";
import styles from "./styles.module.scss";
import { facebookIcon, twitterIcon, instagramIcon } from "assets";

const FooterUI = () => {

	return (
		<div className={styles.footerDiv}>
			<div className={styles.socialsDiv}>
				<a
					href="https://www.instagram.com/7wglobal/."
					target="_blank"
					rel="noreferrer"
				>
					<img src={twitterIcon} alt="" className={styles.socialsDiv__icon} />
				</a>
				<a
					href="https://www.instagram.com/7wglobal/."
					target="_blank"
					rel="noreferrer"
				>
					<img src={facebookIcon} alt="" className={styles.socialsDiv__icon} />
				</a>
				<a
					href="https://www.instagram.com/7wglobal/."
					target="_blank"
					rel="noreferrer"
				>
					<img src={instagramIcon} alt="" className={styles.socialsDiv__icon} />
				</a>
			</div>
			<p>© 2023 Seven Wise Global. </p>
		</div>
	);
};

export { FooterUI };
