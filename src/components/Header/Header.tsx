import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import NavList from '../NavList/NavList';
import { images } from '../../assets/images';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLink}>
        <img
          className={styles.headerLogo}
          src={images.LogoWhite}
          alt="Ashley Brand"
        />
        <h1>Designer, Front-end Developer</h1>
      </Link>
      <Nav />
      <div className={styles.desktopNav}>
        <NavList />
      </div>
    </header>
  );
}

export default Header;
