import Nav from '../Nav/Nav';
import NavList from '../NavList/NavList';
import { images } from '../../assets/images';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <img
        className={styles.headerLogo}
        src={images.LogoWhite}
        alt="Ashley Brand"
      />
      <h1>Ash Designs</h1>
      <Nav />
      <div className={styles.desktopNav}>
        <NavList />
      </div>
    </div>
  );
}

export default Header;
