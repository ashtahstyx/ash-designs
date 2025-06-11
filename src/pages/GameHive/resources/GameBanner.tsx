import styles from '../GameHive.module.scss';

type Game = {
  id: number;
  name: string;
  background_image: string;
};

type GameBannerProps = {
  game?: Game;
};

const GameBanner = ({ game }: GameBannerProps) => {
  if (!game) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h3 className={styles.overlayTitle}>{game.name}</h3>
        <button className={styles.overlayButton}>Get Now</button>
      </div>
      <div className={styles.bannerImage}>
        <img src={game.background_image} alt={game.name} />
      </div>
    </div>
  );
};

export default GameBanner;
