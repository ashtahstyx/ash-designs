import Nav from '../Nav/Nav';
import HeaderList from '../HeaderList/HeaderList';
import Logo from '../../assets/images/Ashley-H_white.png';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.headerLogo} src={Logo} alt="Ashley Brand" />
      <h1>Ash Designs</h1>
      <Nav />
      <div className={styles.desktopNav}>
        <HeaderList />
      </div>
    </div>
  );
}

export default Header;
