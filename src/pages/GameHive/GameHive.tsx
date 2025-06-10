import { useState } from 'react';
import styles from './GameHive.module.scss';
import HiveLogo from '../../../src/assets/images/GameHive.png';
import { FaLightbulb, FaRegLightbulb, FaSearch } from 'react-icons/fa';

const GameHive = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${styles.gameHive} ${styles[theme]}`}>
      <div className={styles.gameHiveHeader}>
        <img
          src={HiveLogo}
          className={styles.gameHiveLogo}
          alt="Game Hive Logo"
        />
        <div className={styles.gameHiveSearch}>
          <FaSearch className={styles.gameHiveSearchIcon} />
          <input
            type="search"
            name="search"
            id="site-search"
            placeholder="Search the Hive"
            className={styles.gameHiveSearchInput}
          />
        </div>
        <div className={styles.colorMode} onClick={toggleTheme}>
          {theme === 'dark' ? (
            <FaLightbulb className={styles.lightMode} />
          ) : (
            <FaRegLightbulb className={styles.darkMode} />
          )}
        </div>
      </div>

      <div className={styles.gameHiveBody}>
        <div>Genre</div>
        <div>GameList</div>
      </div>
    </div>
  );
};

export default GameHive;
