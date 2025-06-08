import React from 'react';
import styles from './About.module.scss';
import AshleyImg from '../../../src/assets/images/ash-headshot_full.jpg';

const About: React.FC = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <img src={AshleyImg} className={styles.cardImg} alt="My headshot" />
        </div>

        <div className={styles.textContent}>
          <h2>Full-Stack Web Developer. Designer. Night Owl.</h2>

          <p>
            Hi, I'm Ashley! I am a graphic designer working in the marketing
            department of a family-owned office furniture company. You can view{' '}
            <a
              className={styles.portLink}
              href="http://designed-by-ash.com/index.html"
              target="_blank"
              rel="noreferrer">
              My Design Portfolio
            </a>{' '}
            here.
          </p>

          <p>
            While my education and current work revolve around graphic design, I
            am strongly drawn to web design and development. I enrolled in a
            6-month bootcamp where I’ve been learning the tools and skills to
            become a full-stack developer. I enjoy long hours of coding and
            complex problem-solving—small victories make it all worth it. My
            goal is to transition into a full-time developer role.
          </p>

          <p>
            Outside of work, I’m a homebody gamer. I spend time with my Xbox, my
            boyfriend, and my two corgis, Maverick and Appa. I enjoy FPS and
            puzzle games that require strategy and problem-solving—let’s be
            honest, it’s all about the rare loot drops. My dogs sing the
            soundtrack of my life—mostly at night, when I’m trying to sleep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
