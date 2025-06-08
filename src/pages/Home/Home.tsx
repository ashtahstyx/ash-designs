import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <div className={styles.title}>
          <div className={styles.titleTop}>
            <span className={styles.titleSmall}>developer, designer</span>
            <h2 className={styles.titleLarge}>Creator</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
