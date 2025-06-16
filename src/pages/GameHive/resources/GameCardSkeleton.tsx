import styles from '../GameHive.module.scss';

type GameCardSkeletonProps = {
  variant?: 'popular' | 'trending';
};

const GameCardSkeleton = ({ variant = 'popular' }: GameCardSkeletonProps) => {
  if (variant === 'trending') {
    return (
      <div className={styles.trendingCard}>
        <div className={styles.trendingImage}>
          <div className={styles.skeletonImage}></div>
        </div>
        <div className={styles.trendingInfo}>
          <div className={styles.skeletonTitle}></div>
        </div>
      </div>
    );
  }

  // Default to popular
  return (
    <div className={styles.popularCard}>
      <div className={styles.popularImage}>
        <div className={styles.skeletonImage}></div>
      </div>
      <div className={styles.popularInfo}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.popularMeta}>
          <span className={styles.skeletonIcon}></span>
          <span className={styles.skeletonIcon}></span>
        </div>
        <div className={styles.popularPlatform}>
          <span className={styles.skeletonIcon}></span>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
