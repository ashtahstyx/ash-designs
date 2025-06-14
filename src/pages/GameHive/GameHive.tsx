import { useState, useEffect } from 'react';
import GameHiveAPI from './src/GameHiveAPI';
import GenreList from './resources/GenreList';
import GameList from './resources/GameList';
import GameBanner from './resources/GameBanner';
import TrendingGames from './resources/TrendingGames';
import styles from './GameHive.module.scss';
import HiveLogo from '../../../src/assets/images/GameHive.png';
import { FaLightbulb, FaRegLightbulb, FaSearch } from 'react-icons/fa';

const GameHive = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [gameList, setGameList] = useState<Game[]>([]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    GameHiveAPI.getAllGames()
      .then((resp) => setGameList(resp.data.results))
      .catch((err) => console.error('Error fetching games:', err));
  }, []);

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
        {/* Genre */}
        <div className={styles.genre}>
          <h2 className={styles.gameListCategory}>Genre</h2>
          <GenreList />
        </div>

        <div className={styles.gameList}>
          <h1 className={styles.gameListTitle}>Games</h1>
          {/* Game Banner */}
          {gameList.length > 0 && <GameBanner game={gameList[0]} />}

          {/* Trending Games */}
          <section className={styles.gameHiveSection}>
            <h2 className={styles.gameListCategory}>Trending Games</h2>
            <div className={styles.trending}>
              {gameList.slice(0, 4).map((game) => (
                <TrendingGames key={game.id} game={game} />
              ))}
            </div>
          </section>

          {/* Full List */}
          <section className={styles.gameHiveSection}>
            <h2 className={styles.gameListCategory}>Popular Games</h2>
            <div className={styles.poplar}>
              <GameList gameList={gameList} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GameHive;
