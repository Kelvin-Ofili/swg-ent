import styles from "./styles.module.scss";
import { amapiano } from "assets";
import { backgroundVideo } from "assets";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";
import Lottie from "react-lottie";
import animationData from "assets/lotties/background.json";

const LandingPageUI = () => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.scrollVideo}>
        <Lottie options={defaultOptions} />
      </div>
      <video autoPlay muted loop className={styles.video}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <img src={amapiano} alt="" className={styles.titleImage} />
        <Button
          text="GET TICKET"
          className={styles.higherBtn}
          available="open"
          onClick={() => navigate(Routes.tickets)}
        />
      </div>
    </div>
  );
};

export { LandingPageUI };
