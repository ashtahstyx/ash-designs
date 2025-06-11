import { useEffect, useState } from 'react';
import styles from '../GameHive.module.scss';
import GameHiveAPI from './GameHiveAPI';

type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const GenreList = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    GameHiveAPI.getGenreList()
      .then((resp) => {
        setGenreList(resp.data.results);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
      });
  }, []);

  return (
    <>
      {genreList.map((item, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          key={item.id}
          className={`${styles.genreList} ${
            activeIndex === index ? styles.active : ''
          }`}>
          <div className={styles.genreImage}>
            <img src={item.image_background} alt={item.name} />
          </div>
          <h3 className={styles.genreTitle}>{item.name}</h3>
        </div>
      ))}
    </>
  );
};

export default GenreList;
