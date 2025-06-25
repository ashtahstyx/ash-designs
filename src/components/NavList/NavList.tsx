import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavList.module.scss';

type NavItem = {
  label: string;
  path: string;
};

type NavListProps = {
  basePath: string;
  navItems: readonly NavItem[];
  className?: string;
  getLinkClassName?: (isActive: boolean) => string;
};

const NavList: React.FC<NavListProps> = ({
  basePath,
  navItems,
  className,
  getLinkClassName = (isActive) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`,
}) => {
  return (
    <ul className={`${styles.navList} ${className ?? ''}`}>
      {navItems.map(({ label, path }) => {
        const to = path.startsWith('/') ? path : `${basePath}/${path}`;
        return (
          <li key={path}>
            <NavLink
              to={to}
              className={({ isActive }) => getLinkClassName(isActive)}>
              {label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
