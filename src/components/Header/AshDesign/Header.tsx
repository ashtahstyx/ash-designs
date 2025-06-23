import { Link } from 'react-router-dom';
import Nav from './Nav';
import NavList from '../../NavList/NavList';
import { images } from '../../../assets/images';
import styles from './Header.module.scss';

type HeaderProps = {
  brandName: string;
  basePath: string;
  navItems: readonly { label: string; path: string }[];
};

function Header({ brandName, basePath, navItems }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link to={basePath} className={styles.headerLink}>
        <img
          className={styles.headerLogo}
          src={images.LogoWhite}
          alt={`${brandName} Logo`}
        />
        <h1>Designer, Front-end Developer</h1>
      </Link>
      <Nav basePath={basePath} navItems={navItems} />
      <div className={styles.desktopNav}>
        <NavList
          basePath={basePath}
          navItems={navItems}
          className={styles.headerList}
        />
      </div>
    </header>
  );
}

export default Header;
