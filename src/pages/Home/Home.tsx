import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* <div className={styles.homeIntro}>
        <h2>Hi, I'm Ash</h2>
        <span>
          Your brand deserves a website that looks sharp and works flawlessly. I
          design and build digital experiences that do both.
        </span>
      </div> */}
      <div className={styles.homeWrapper}>
        <div className={styles.title}>
          <div className={styles.titleTop}>
            <span className={styles.titleSmall}>developer, designer,</span>
            <h2 className={styles.titleLarge}>Creator</h2>
            <Link to="/about" className={styles.titleLearnMore}>
              Meet Ash <FaArrowRight className={styles.bounce} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
