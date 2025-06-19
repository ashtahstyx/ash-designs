import { useState, useEffect } from 'react';
import { FaLightbulb, FaRegLightbulb, FaSearch } from 'react-icons/fa';

import GameHiveAPI from './src/GameHiveAPI';
import type { Game } from './src/types';

import GenreList from './resources/GenreList';
import GameList from './resources/GameList';
import GameBanner from './resources/GameBanner';
import TrendingGames from './resources/TrendingGames';
import GameCardSkeleton from './resources/GameCardSkeleton';
import styles from './GameHive.module.scss';

const GameHiveMain = () => {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setLoading(true);
    if (selectedGenreId === null) {
      GameHiveAPI.getAllGames()
        .then((resp) => setGameList(resp.data.results))
        .catch((err) => console.error('Error fetching games:', err))
        .finally(() => setLoading(false));
    } else {
      GameHiveAPI.getGamesByGenre(selectedGenreId)
        .then((resp) => setGameList(resp.data.results))
        .catch((err) => console.error('Error fetching games by genre:', err))
        .finally(() => setLoading(false));
    }
  }, [selectedGenreId]);

  const suggestions = searchTerm
    ? gameList
        .filter((game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5)
    : [];

  return (
    <div className={`${styles.gameHive} ${styles[theme]}`}>
      <div
        className={styles.colorMode}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
          }
        }}
        onClick={toggleTheme}
        tabIndex={0}>
        {theme === 'dark' ? (
          <FaLightbulb className={styles.lightMode} />
        ) : (
          <FaRegLightbulb className={styles.darkMode} />
        )}
      </div>
      <div className={styles.gameHiveSearch}>
        <FaSearch className={styles.gameHiveSearchIcon} />
        <input
          type="search"
          aria-label="Search games in Game Hive"
          name="search"
          id="site-search"
          placeholder="Search the Hive"
          className={styles.gameHiveSearchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && suggestions.length > 0 && (
          <ul
            className={styles.suggestionsList}
            role="listbox"
            aria-live="polite">
            {suggestions.map((game) => (
              <li
                key={game.id}
                className={styles.suggestionItem}
                role="button"
                tabIndex={0} // ✅ number, not string
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSearchTerm(game.name);
                  }
                }}
                onClick={() => setSearchTerm(game.name)}>
                {game.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.gameHiveBody}>
        {/* Genre */}
        <div className={styles.genre}>
          <h3 className={styles.gameListCategory}>Genre</h3>
          <GenreList
            setGenreId={(id) => {
              setSelectedGenreId(id);
              setSearchTerm('');
            }}
            setSelectedGenre={(genre) => {
              setSelectedGenre(genre);
              setSearchTerm('');
            }}
          />
        </div>

        <div className={styles.gameList}>
          <h3 className={styles.gameListTitle}>Games</h3>

          {searchTerm ? (
            // Show ONLY filtered results when searching
            <section className={styles.gameHiveSection}>
              <h2 className={styles.gameListCategory}>Search Results</h2>
              <GameList gameList={suggestions} loading={loading} />
            </section>
          ) : (
            <>
              {/* Banner */}
              {gameList.length > 0 && <GameBanner game={gameList[0]} />}

              {/* Trending Games */}
              <section className={styles.gameHiveSection}>
                <h3 className={styles.gameListCategory}>Trending Games</h3>
                {loading ? (
                  <div className={styles.trending}>
                    {[...Array(4)].map((_, index) => (
                      <GameCardSkeleton key={index} variant="trending" />
                    ))}
                  </div>
                ) : (
                  <div className={styles.trending}>
                    {gameList.slice(0, 4).map((game) => (
                      <TrendingGames key={game.id} game={game} />
                    ))}
                  </div>
                )}
              </section>

              {/* Full List */}
              <section className={styles.gameHiveSection}>
                <h3 className={styles.gameListCategory}>
                  {selectedGenre ? `${selectedGenre} Games` : 'Popular Games'}
                </h3>
                <GameList gameList={gameList} loading={loading} />
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameHiveMain;
