import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import NavList from '../NavList/NavList';
import { images } from '../../assets/images';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.headerLink}>
        <img
          className={styles.headerLogo}
          src={images.LogoWhite}
          alt="Ashley Brand"
        />
        <h1>Graphic Designer, Front-end Developer</h1>
      </Link>
      <Nav />
      <div className={styles.desktopNav}>
        <NavList />
      </div>
    </div>
  );
}

export default Header;
