import { TopTitle } from "components/topTitle";
import styles from "./styles.module.scss";
import React from "react";
import { aboutGroupPicture, aboutVideo } from "assets";

const AboutUI = () => {
  return (
    <div className={styles.about}>
      <div className={styles.phoneScreen}>
        <TopTitle text="ABOUT US" position={true} />
      </div>
      <video
        playsInline
        controlsList="nodownload"
        autoPlay
        muted
        loop
        className={styles.about__video}
      >
        <source src={aboutVideo} type="video/mp4" />
      </video>
      <div className={styles.about__paragraph}>
        <p>
          Since launching in 2017, SWG has quickly made a name for itself in the
          event and music scene. We're a spirited team that blends fresh ideas
          with solid expertise, specializing in everything from artist bookings
          to music festivals. Our connections in the industry let us bring top
          talent to the stage, featuring a diverse range of genres like
          Afrobeats and Amapiano.
        </p>
        <br />
        <p>
          We're all about creating unforgettable experiences that resonate with
          music lovers from all walks of life. Our events aren't just shows;
          they're communities where fans can connect and discover new artists.
          We've hosted big names in Afrobeats and Amapiano, and we're always on
          the hunt for the next big act.
        </p>
        <br />
        <p>
          In just a few years, we've pushed boundaries and set new standards in
          event planning. We're driven by our love for music and our commitment
          to doing something extraordinary. Looking ahead, we're excited to keep
          growing, innovating, and delivering events that leave a lasting
          impression.
        </p>
      </div>
      <TopTitle text="OUR TEAM" position={false} />
      <img
        src={aboutGroupPicture}
        alt=""
        className={styles.about__groupPicture}
      />
      <div className={`${styles.about__paragraph} ${styles.secondParagraph}`}>
        <p>
          We are more than just a team; we are the beating heart of SWG. We're a
          fun group that likes to change things up in the world of
          entertainment. We're young yet smart, always on top of what's new but
          not forgetting the proven strategies that brought us here. We're all
          about creating a good time and dedicated to deliver with an
          outstanding quality. We put our all into every event, hoping to leave
          a lasting impression on everyone who attends.
        </p>
      </div>
    </div>
  );
};

export { AboutUI };
