import NavList from '../../NavList/NavList';
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
        <a
          href="https://github.com/ashtahstyx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/huntashley/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile">
          <FaLinkedin />
        </a>
        <a
          href="https://www.pinterest.com/ashtahstyx/_profile/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile">
          <FaPinterest />
        </a>
      </div>
      <div className={styles.footerCopyright}>
        <FaRegCopyright /> <span>Ash Designs</span>
      </div>
    </div>
  );
}

export default Footer;
