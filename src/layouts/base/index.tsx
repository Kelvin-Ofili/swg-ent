import React from "react";
import styles from "./styles.module.scss";
import { HeaderUI, FooterUI } from "components";

interface BaseLayoutPros {
	children: any;
	props: "both" | "header" | "footer";
}

const BaseLayoutUI: React.FC<BaseLayoutPros> = ({ children, props }) => {
	return (
		<div>
			{props === "footer" ? "" : <HeaderUI />}
			{children}
			{props === "header" ? "" : <FooterUI />}
		</div>
	);
};

export { BaseLayoutUI };
