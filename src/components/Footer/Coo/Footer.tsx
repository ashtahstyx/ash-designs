import NavList from '../../NavList/NavList';
import { FaRegCopyright } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import {
  subbrandConfigs,
  type SubbrandKey,
} from '../../../config/subbrandConfigs';
import styles from './Footer.module.scss';

function Footer() {
  const { subbrand } = useParams<{ subbrand: string }>();

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
      <div className={styles.footerCopyright}>
        <FaRegCopyright /> <span>Ash Designs</span>
      </div>
    </div>
  );
}

export default Footer;
