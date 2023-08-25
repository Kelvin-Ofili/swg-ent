import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FormUI, TopTitle } from "components";

const ContactUI = () => {
	return (
		<div className={styles.contactDiv}>
			<div className={styles.top}>
				<TopTitle text={"CONTACT US"} position={true} />
			</div>
			<FormUI type={true} />
		</div>
	);
};

export { ContactUI };
