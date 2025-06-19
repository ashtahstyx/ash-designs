import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = {
  label: string;
  path: string;
};

type NavListProps = {
  basePath: string;
  navItems: readonly NavItem[];
  className?: string;
};

const NavList: React.FC<NavListProps> = ({
  basePath,
  navItems,
  className = '',
}) => {
  return (
    <ul className={`${className}`}>
      {navItems.map(({ label, path }) => (
        <li key={path}>
          <NavLink to={`${basePath}/${path}`}>{label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
