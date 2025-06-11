import styles from '../GameHive.module.scss';

type Game = {
  id: number;
  name: string;
  background_image: string;
};

type GameBannerProps = {
  game?: Game; // <-- mark as optional
};

const GameBanner = ({ game }: GameBannerProps) => {
  if (!game) return null;

  return (
    <div className={styles.banner}>
      <div>
        <h1>{game.name}</h1>
        <button></button>
      </div>
      <div className={styles.bannerImage}>
        <img src={game.background_image} alt={game.name} />
      </div>
    </div>
  );
};

export default GameBanner;
