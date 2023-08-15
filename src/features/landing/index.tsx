import React from "react";
import styles from "./styles.module.scss";
import { HeaderUI } from "../../components/header";
import { EventsUI } from "../../components/events";
import { PhotoGalleryUI } from "../../components/photoGallery";

const LandingPageUI = () => {
	return (
		<div>
			<HeaderUI />
			
			<EventsUI />
			<PhotoGalleryUI />
		</div>
	);
};

export { LandingPageUI };
