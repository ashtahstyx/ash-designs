import NavList from '../NavList/NavList';
import {
  FaGithub,
  FaLinkedin,
  FaPinterest,
  FaRegCopyright,
} from 'react-icons/fa';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <NavList variant="footer" />
      <div className={styles.footerSocial}>
        <FaGithub />
        <FaLinkedin />
        <FaPinterest />
      </div>
      <div className={styles.footerCopyright}>
        <FaRegCopyright /> <span>Ash Designs</span>
      </div>
    </div>
  );
}

export default Footer;
