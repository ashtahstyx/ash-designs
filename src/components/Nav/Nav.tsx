import { useState } from 'react';
import styles from './Nav.module.scss';
import NavList from '../NavList/NavList';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.nav}>
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className={styles.navButton}>
        <div className={styles.burger}>
          <div
            className={`${styles.burgerOne} ${
              menuOpen ? styles.burgerOneOpen : ''
            }`}></div>
          <div
            className={`${styles.burgerTwo} ${
              menuOpen ? styles.burgerTwoOpen : ''
            }`}></div>
          <div
            className={`${styles.burgerThree} ${
              menuOpen ? styles.burgerThreeOpen : ''
            }`}></div>
        </div>
      </button>

      <div className={`${styles.navList} ${menuOpen ? styles.menuOpen : ''}`}>
        <NavList variant="header" />
      </div>
    </nav>
  );
}

export default Nav;
