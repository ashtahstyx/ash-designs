import { images } from '../../../assets/images';
import styles from './GameHiveHeader.module.scss';

function GameHiveHeader() {
  return (
    <>
      <header className={styles.gameHiveHeader}>
        <div className={styles.gameHiveBrand} tabIndex={0}>
          <img
            src={images.LogoGameHiveDrk}
            className={styles.gameHiveLogo}
            alt="Game Hive Logo"
          />
          <h2>Game Hive</h2>
        </div>
      </header>
    </>
  );
}

export default GameHiveHeader;
