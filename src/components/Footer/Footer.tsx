import NavList from '../NavList/NavList';
import { images } from '../../assets/images';
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
      <img
        className={styles.footerLogo}
        src={images.LogoWhite}
        alt="Ashley Brand"
      />
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
