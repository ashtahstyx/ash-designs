import { useState } from 'react';
import NavList from '../../NavList/NavList';
import styles from './Nav.module.scss';

type NavProps = {
  basePath: string;
  navItems: readonly { label: string; path: string }[];
};

function Nav({ basePath, navItems }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.nav}>
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
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

      {menuOpen && (
        <div
          id="primary-navigation"
          className={`${styles.navList} ${menuOpen ? styles.menuOpen : ''}`}>
          <NavList
            basePath={basePath}
            navItems={navItems}
            className={styles.navItems}
          />
        </div>
      )}
    </nav>
  );
}

export default Nav;
