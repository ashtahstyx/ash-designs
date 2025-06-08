import { NavLink } from 'react-router-dom';
import styles from './Navlist.module.scss';

type NavListProps = {
  variant?: 'header' | 'footer';
};

const navItems = [
  { label: 'GameHive', path: '/gamehive' },
  { label: 'Coo Dating App', path: '/coo' },
  { label: 'Loliware', path: '/loliware' },
  { label: 'Garden Party', path: '/garden-party' },
  { label: 'About Ash', path: '/about' },
];

function NavList({ variant = 'header' }: NavListProps) {
  return (
    <ul
      className={variant === 'footer' ? styles.footerList : styles.headerList}>
      {navItems.map(({ label, path }) => (
        <li key={label}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
