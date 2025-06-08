import styles from './Navlist.module.scss';

type NavListProps = {
  variant?: 'header' | 'footer';
};

function NavList({ variant = 'header' }: NavListProps) {
  const items = [
    'GameHive',
    'Coo Dating App',
    'Loliware',
    'Garden Party',
    'About Ash',
  ];

  return (
    <>
      <ul
        className={`${
          variant === 'footer' ? styles.footerList : styles.headerList
        }`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default NavList;
