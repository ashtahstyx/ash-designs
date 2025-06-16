import styles from '../GameHive.module.scss';
import type { Game } from '../src/types';

type TrendingGamesProps = {
  game?: Game;
};

const TrendingGames = ({ game }: TrendingGamesProps) => {
  if (!game) return null;

  return (
    <div className={styles.trendingCard} tabIndex={0}>
      <div className={styles.trendingImage}>
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className={styles.trendingInfo}>
        <h3 className={styles.trendingTitle}>{game.name}</h3>
      </div>
    </div>
  );
};

export default TrendingGames;
