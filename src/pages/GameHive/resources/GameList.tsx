import { useEffect, useState } from 'react';
import styles from '../GameHive.module.scss';
import GameHiveAPI from './GameHiveAPI';
import GameBanner from './GameBanner';

type Game = {
  id: number;
  name: string;
  background_image: string;
};

const GameList = () => {
  const [gameList, setGameList] = useState<Game[]>([]);

  useEffect(() => {
    GameHiveAPI.getAllGames()
      .then((resp) => {
        setGameList(resp.data.results);
        console.log(resp.data.results);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <>
      <h2>Games</h2>

      {gameList.length > 0 && <GameBanner game={gameList[0]} />}

      {gameList.map((item) => (
        <div key={item.id} className={styles.GameList}>
          <div className={styles.GameImage}>
            <img src={item.background_image} alt={item.name} />
          </div>
          <h3 className={styles.GameTitle}>{item.name}</h3>
        </div>
      ))}
    </>
  );
};

export default GameList;
