import styles from './About.module.scss';
import { images } from '../../assets/images';

const About = () => {
  const heading = 'Front-end Developer. Designer. Corgi Wrangler.';

  return (
    <div className={styles.about}>
      <div className={styles.aboutBGText}>
        <span>Meet</span>
        <span>Ash</span>
      </div>
      <div className={styles.aboutImage}>
        <img src={images.HeadshotPng} alt="Ashley headshot" />
      </div>

      <div className={styles.aboutContent}>
        <h2>
          {heading.split('.').map(
            (part, index) =>
              part.trim() && (
                <span key={index}>
                  {part.trim()}
                  <br />
                </span>
              )
          )}
        </h2>

        <p>
          Hi, I’m Ashley! I’m a front-end developer with a background in graphic
          design and passionate about creating clean, accessible, user-centered
          digital experiences. With 8 years of experience across corporate,
          freelance, and non-profit work, I bring creative vision and technical
          precision to every project.
        </p>

        <p>
          I’m known for my creative instinct, quick adoption of new
          technologies, and attention to detail. I specialize in building
          responsive, ADA-compliant, brand-consistent websites that don’t just
          look great—they work beautifully. From fresh ideas to fine-tuning what
          exists, I bring empathy and a commitment to better solutions. I love
          solving tough problems with code and celebrating the little wins that
          make it all worthwhile.
        </p>

        <p>
          Outside of work, life revolves around my two corgis, Maverick and
          Appa. They excel at late-night barking concerts, snoring through Zoom
          calls, and producing impressive fur tumbleweeds.
        </p>
      </div>
    </div>
  );
};

export default About;
