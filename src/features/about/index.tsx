import { TopTitle } from "components/topTitle";
import styles from "./styles.module.scss";
import React from "react";
import { aboutVideo } from "assets";

const AboutUI = () => {
	return (
		<div className={styles.about}>
			<TopTitle text="ABOUT US" position={true} />
			<video autoPlay muted loop className={styles.about__video}>
				<source src={aboutVideo} type="video/mp4" />
			</video>
			<div className={styles.about__paragraph}>
				<p>
					Founded in 2017, 7wiseGlobal is an event and booking company
					specializing in artist performances and music festivals. We are a
					young and dynamic organization that brings fresh ideas and innovative
					approaches to the world of event planning. Despite being relatively
					new, we have quickly established ourselves as a trusted name within
					the industry, delivering exceptional experiences and exceeding client
					expectations.
				</p>
				<br />
				<p>
					With our foundation built on a deep passion for music and a commitment
					to excellence, we bring a vibrant and energetic spirit to every
					project we undertake. Our team combines youth and experience,
					incorporating the latest trends and technologies while drawing on the
					wisdom gained from years of event management expertise.
				</p>
				<br />
				<p>
					Since our establishment, we have cultivated strong relationships with
					artists, agents, and industry professionals around the world. These
					connections enable us to secure top talent and create lineups that
					resonate with music lovers of all backgrounds. Our dedication to
					diversity and inclusivity ensures that our festivals and artist
					performances offer something for everyone, embracing a broad range of
					musical genres and fostering a sense of community.
				</p>
			</div>
			<TopTitle text="OUR TEAM" position={false} />
		</div>
	);
};

export { AboutUI };
