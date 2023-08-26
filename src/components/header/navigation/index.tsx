import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Hamburger } from "components/hamburger";

const NavigationUI: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav className={styles.navigation}>
        <Link to="/about">About US</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/get-tickets">Tickets</Link>
      </nav>
      <div
        className={!clicked ? `${styles.phoneNavigation}` : `${styles.showNav}`}
      >
        <div onClick={handleClicked}>
          <Hamburger />
        </div>
        <nav>
          <Link onClick={handleClicked} to="/about">
            About US
          </Link>
          <Link onClick={handleClicked} to="/contact">
            Contact
          </Link>
          <Link onClick={handleClicked} to="/gallery">
            Gallery
          </Link>
          <Link onClick={handleClicked} to="/get-tickets">
            Tickets
          </Link>
        </nav>
      </div>
    </>
  );
};

export { NavigationUI };
