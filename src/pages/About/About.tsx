import styles from './About.module.scss';
import ProfileImg from '../../../src/assets/images/ash-headshot_full.jpg';

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <img
            src={ProfileImg}
            className={styles.cardImg}
            alt="Ashley headshot"
          />
        </div>

        <div className={styles.textContent}>
          <h2>Front-end Developer. Designer. Corgi Wrangler.</h2>

          <p>
            Hi, I’m Ashley! I’m a front-end developer with a background in
            graphic design, passionate about creating clean, accessible, and
            user-centered digital experiences. With 8 years of professional
            experience—including work in corporate, freelance, and non-profit
            settings—I bring both creative vision and technical precision to
            every project I take on.
          </p>

          <p>
            I’m known for my strong creative instinct, quick adoption of new
            technologies, and acute attention to detail. I specialize in
            building responsive, ADA-compliant, and brand-consistent websites
            that don’t just look great—they work beautifully.
          </p>

          <p>
            Whether I’m jumping into a new challenge or refining an existing
            experience, I approach every project with fresh eyes, empathy for
            the end user, and a drive to create something better than what came
            before. I thrive on solving tough problems with code, and I find joy
            in the little wins that make all the hours worthwhile.
          </p>

          <p>
            Outside of work, my life is soundtracked by my two corgis, Maverick
            and Appa—who prefer performing their barking concerts at 3 a.m. They
            specialize in guarding the house from people in other yards, snoring
            through Zoom calls, and creating dazzling tumbleweeds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
