import React from "react";
import styles from "./styles.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { Hamburger } from "components/hamburger";

const NavigationUI: React.FC = () => {
	return (
		<>
			<nav className={styles.navigation}>
				<Link to="/about">About US</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/gallery">Gallery</Link>
				<Link to="/get-tickets">Tickets</Link>
			</nav>
			<div className={styles.phoneNavigation}>
				<Hamburger />
				{/* <nav>
					<Link to="/about">About US</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/get-tickets">Tickets</Link>
				</nav> */}
			</div>
		</>
	);
};

export { NavigationUI };
