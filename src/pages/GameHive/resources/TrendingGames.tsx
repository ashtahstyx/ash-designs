import styles from '../GameHive.module.scss';
import type { Game } from '../src/types';

type TrendingGamesProps = {
  game?: Game;
};

const TrendingGames = ({ game }: TrendingGamesProps) => {
  if (!game) return null;

  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingImage}>
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className={styles.trendingInfo}>
        <h4 className={styles.trendingTitle}>{game.name}</h4>
      </div>
    </div>
  );
};

export default TrendingGames;
