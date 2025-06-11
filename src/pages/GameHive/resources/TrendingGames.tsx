import styles from '../GameHive.module.scss';

type Game = {
  id: number;
  name: string;
  background_image: string;
};

type TrendingGamesProps = {
  game?: Game; // <-- mark as optional
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
