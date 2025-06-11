import styles from '../GameHive.module.scss';

type Game = {
  id: number;
  name: string;
  background_image: string;
};

type GameListProps = {
  gameList: Game[];
};

const GameList = ({ gameList }: GameListProps) => {
  return (
    <div className={styles.popular}>
      {gameList.map((item) => (
        <div key={item.id} className={styles.GameList}>
          <div className={styles.GameImage}>
            <img src={item.background_image} alt={item.name} />
          </div>
          <h3 className={styles.GameTitle}>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GameList;
