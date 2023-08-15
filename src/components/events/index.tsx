import React from "react";
import styles from "./styles.module.scss";
import { amapiano, jungle, yacht } from "../../assets";

const EventsUI: React.FC = () => {
	const cards = [
		{
			id: 1,
			image: jungle,
			month: "APR",
			date: "14",
			firstLineTitle: "MR Jazziq",
			secondLineTitle: "King of the Jungle",
			setting:
				"We'll get you directly seated and inside for you to enjoy the show.",
		},
		{
			id: 2,
			image: amapiano,
			month: "APR",
			date: "14",
			firstLineTitle: "Amapiano x King of the Jungle",
			secondLineTitle: "@ Cheetah Girne",
			setting: "Directly seated and inside for you to enjoy the show.",
		},
		{
			id: 3,
			image: yacht,
			month: "APR",
			date: "14",
			firstLineTitle: "100% Drip Yatch Control X",
			secondLineTitle: "Bernice Burgos",
			setting: "Directly seated and inside for you to enjoy the show.",
		},
	];
	return (
		<div className={styles.backGround}>
			<div className={styles.events}>
				<h1 className={styles.upcoming}>UPCOMING EVENT</h1>
				<div className={styles.cards}>
					{cards.map((card) => (
						<div key={card.id} className={styles.cards__item}>
							<img src={card.image} alt="" />
							<div className={styles.eventDetails}>
								<div className={styles.eventDetails__left}>
									<p className={styles.eventDetails__left__month}>
										{card.month}
									</p>
									<h2 className={styles.eventDetails__left__date}>
										{card.date}
									</h2>
								</div>
								<div className={styles.eventDetails__right}>
									<div>
										<h4 className={styles.eventDetails__right__title}>
											{card.firstLineTitle}
										</h4>
										<h4
											className={`${styles.eventDetails__right__title} ${styles.secondLine}`}
										>
											{card.secondLineTitle}
										</h4>
									</div>
									<p className={styles.eventDetails__right__text}>
										{card.setting}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export { EventsUI };
