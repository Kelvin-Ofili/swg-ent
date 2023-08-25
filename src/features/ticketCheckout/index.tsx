import React from "react";
import styles from "./styles.module.scss";
import { FormUI, TicketProps, TicketSale, TopTitle } from "components";
import { star } from "assets";

const TicketCheckoutUI = () => {
	const sample = {
		id: "3",
		month: "TBA",
		date: "00",
		day: "TBA",
		time: "10: 00 PM",
		sun: star,
		venue: "Club Cheetah Girne",
		name: "Myztro: Amapiano Asylum 2.0",
		available: "none",
		validVenue: true,
	};
	return (
		<div className={styles.contactDiv}>
			<div className={styles.top}>
				<TopTitle text={"YOU ARE ALMOST THERE"} position={true} />
			</div>
			<div className={styles.checkout}>
				<TicketSale {...(sample as TicketProps)} className={styles.info} />
				<FormUI type={false} className={styles.formInfo} />
			</div>
		</div>
	);
};

export { TicketCheckoutUI };
