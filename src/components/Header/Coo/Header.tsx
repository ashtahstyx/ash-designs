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
      <header className={styles.cooHeader}>
        <div className={styles.cooBrand} tabIndex={0}>
          <img
            className={styles.cooLogo}
            src={images.LogoCoo}
            alt="COO dating app logo"
          />
          <h2>Dating App</h2>
        </div>
        <NavList
          basePath={basePath}
          navItems={navItems}
          className={styles.headerList}
          getLinkClassName={(isActive) =>
            `${styles.myCustomLink} ${isActive ? styles.isActive : ''}`
          }
        />
      </header>
    </>
  );
}

export default Header;
