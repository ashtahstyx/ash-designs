import styles from '../GameHive.module.scss';
import GameCardSkeleton from './GameCardSkeleton';
import {
  FaStar,
  FaXbox,
  FaWindows,
  FaClock,
  FaApple,
  FaLinux,
} from 'react-icons/fa';
import { SiPlaystation } from 'react-icons/si';
import type { Game } from '../src/types';

type GameListProps = {
  gameList: Game[];
  loading?: boolean;
};

const GameList = ({ gameList, loading }: GameListProps) => {
  const getPlatformCategory = (name: string): string | null => {
    const lower = name.toLowerCase();
    if (lower.includes('xbox')) return 'xbox';
    if (lower.includes('playstation')) return 'playstation';
    if (lower.includes('pc')) return 'pc';
    if (lower.includes('mac')) return 'mac';
    if (lower.includes('linux')) return 'linux';
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
      case 'mac':
        return <FaApple key="mac" title="Mac" />;
      case 'linux':
        return <FaLinux key="linux" title="Linux" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.popular}>
      {loading
        ? [...Array(9)].map((_, index) => (
            <GameCardSkeleton key={index} variant="popular" />
          ))
        : gameList.map((game) => {
            const platformKeys = game.platforms
              ?.map((p) => getPlatformCategory(p.platform.name))
              .filter((p): p is string => p !== null);
            console.log(game);

            const uniquePlatformKeys = Array.from(new Set(platformKeys));

            return (
              <div tabIndex={0} key={game.id} className={styles.popularCard}>
                <div className={styles.popularImage}>
                  <img src={game.background_image} alt={game.name} />
                </div>

                <div className={styles.popularInfo}>
                  <div className={styles.popularPlatform}>
                    <span className={styles.popularIcon}>
                      {uniquePlatformKeys.map((key) => renderPlatformIcon(key))}
                    </span>
                  </div>
                  <h3 className={styles.popularInfoTitle}>{game.name}</h3>
                  <div className={styles.popularMeta}>
                    <span className={styles.popularIcon}>
                      <FaStar /> {game.rating}
                    </span>
                    <span className={styles.popularIcon}>
                      <FaClock /> {game.playtime} hrs
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default GameList;
