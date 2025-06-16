import { useEffect, useState } from 'react';
import styles from '../GameHive.module.scss';
import GameHiveAPI from '../src/GameHiveAPI';

type Genre = {
  id: number;
  name: string;
  image_background: string;
};

type GenreListProps = {
  setGenreId: (id: number) => void;
  setSelectedGenre: (name: string) => void;
};

const GenreList = ({ setGenreId, setSelectedGenre }: GenreListProps) => {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    GameHiveAPI.getGenreList()
      .then((resp) => setGenreList(resp.data.results))
      .catch((error) => console.error('Error fetching genres:', error));

    // detect screen size:
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelect = (id: number, name: string, index: number) => {
    setActiveIndex(index);
    setGenreId(id);
    setSelectedGenre(name);
  };

  return isMobile ? (
    <select
      className={styles.genreDropdown}
      value={genreList[activeIndex]?.id ?? ''}
      onChange={(e) => {
        const index = genreList.findIndex(
          (g) => g.id === Number(e.target.value)
        );
        if (index >= 0) {
          handleSelect(genreList[index].id, genreList[index].name, index);
        }
      }}>
      <option value="">Select Genre</option>
      {genreList.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  ) : (
    <>
      {genreList.map((item, index) => (
        <div
          role="button"
          tabIndex={0}
          key={item.id}
          onClick={() => handleSelect(item.id, item.name, index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSelect(item.id, item.name, index);
            }
          }}
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
