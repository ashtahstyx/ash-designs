import styles from '../GameHive.module.scss';
import { FaStar, FaXbox, FaWindows, FaClock } from 'react-icons/fa';
import { SiPlaystation } from 'react-icons/si';
import type { Game } from '../src/types';
import { useEffect } from 'react';

type GameListProps = {
  gameList: Game[];
};

const GameList = ({ gameList }: GameListProps) => {
  useEffect(() => {
    console.log('Game list received in GameList component:', gameList);
  }, [gameList]);

  // Map a full platform name to a category key
  const getPlatformCategory = (name: string): string | null => {
    const lower = name.toLowerCase();
    if (lower.includes('xbox')) return 'xbox';
    if (lower.includes('playstation')) return 'playstation';
    if (lower.includes('pc')) return 'pc';
    return null;
  };

  const renderPlatformIcon = (platformKey: string) => {
    switch (platformKey) {
      case 'xbox':
        return <FaXbox key="xbox" title="Xbox" />;
      case 'playstation':
        return <SiPlaystation key="ps" title="PlayStation" />;
      case 'pc':
        return <FaWindows key="pc" title="PC" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.popular}>
      {gameList.map((item) => {
        const platformKeys = item.platforms
          ?.map((p) => getPlatformCategory(p.platform.name))
          .filter((p): p is string => p !== null);

        const uniquePlatformKeys = Array.from(new Set(platformKeys));

        return (
          <div key={item.id} className={styles.popularList}>
            <div className={styles.popularCard}>
              <div className={styles.popularImage}>
                <img src={item.background_image} alt={item.name} />
              </div>
              <h3 className={styles.popularTitle}>{item.name}</h3>
              <div className={styles.popularInfo}>
                <span className={styles.popularIcon}>
                  <FaStar /> {item.rating}
                </span>
                <span className={styles.popularIcon}>
                  <FaClock />
                  {item.playtime}
                </span>
              </div>
              <span className={styles.popularIcon}>
                {uniquePlatformKeys.map((key) => renderPlatformIcon(key))}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameList;
