import NavList from '../../NavList/NavList';
import {
  FaGithub,
  FaLinkedin,
  FaPinterest,
  FaRegCopyright,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import {
  subbrandConfigs,
  type SubbrandKey,
} from '../../../config/subbrandConfigs';
import styles from './Footer.module.scss';

function Footer() {
  const { subbrand } = useParams<{ subbrand: string }>();

  // Type guard function (optional, helps readability)
  function isSubbrandKey(key: string): key is SubbrandKey {
    return key in subbrandConfigs;
  }

  if (!subbrand || !isSubbrandKey(subbrand)) return null;

  const config = subbrandConfigs[subbrand];
  return (
    <div className={styles.footer}>
      <NavList
        basePath={`/${subbrand}`}
        navItems={config.navItems}
        className={styles.footerList}
      />
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
