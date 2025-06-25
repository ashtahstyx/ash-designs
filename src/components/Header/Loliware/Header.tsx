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
      <header className={styles.loliWareHeader}>
        <div className={styles.loliWareBrand} tabIndex={0}>
          <img
            src={images.LogoLoliPNG}
            className={styles.loliWareLogo}
            alt="LoliWare Logo"
          />
        </div>
        <NavList
          basePath={basePath}
          navItems={navItems}
          className={styles.headerList}
          getLinkClassName={(isActive) =>
            `${styles.loliwareNavItem} ${isActive ? styles.isActive : ''}`
          }
        />
      </header>
    </>
  );
}

export default Header;
