import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <div className={styles.title}>
          <div className={styles.titleTop}>
            <span className={styles.titleSmall}>developer, designer,</span>
            <h2 className={styles.titleLarge}>Creator</h2>
            <Link to="/ah/about" className={styles.titleLearnMore}>
              Meet Ash <FaArrowRight className={styles.bounce} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
