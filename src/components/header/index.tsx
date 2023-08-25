import { swg } from "assets";
import React from "react";
import { NavigationUI } from "./navigation";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";

const HeaderUI = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.flex}>
			<div className={styles.swgDiv}>
				<img
					src={swg}
					alt=""
					onClick={() => navigate(Routes.landing)}
					className={styles.swg}
				/>
				<NavigationUI />
			</div>
		</div>
	);
};

export { HeaderUI };
