import { images } from '../../../assets/images';
import styles from './Header.module.scss';
import NavList from '../../NavList/NavList';

type HeaderProps = {
  brandName: string;
  basePath: string;
  navItems: readonly { label: string; path: string }[];
};

function Header({ basePath, navItems }: HeaderProps) {
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
        <NavList
          basePath={basePath}
          navItems={navItems}
          className={styles.headerList}
        />
      </header>
    </>
  );
}

export default Header;
