import React from 'react';
import { Outlet, Navigate, useParams } from 'react-router-dom';
import {
  subbrandConfigs,
  type SubbrandKey,
} from '../../config/subbrandConfigs';

import AshHeader from '../Header/AshDesign/Header';
import AshFooter from '../Footer/AshDesign/Footer';
import GameHiveHeader from '../Header/GameHive/Header';
import GameHiveFooter from '../Footer/GameHive/Footer';
import LoliwareHeader from '../Header/Loliware/Header';
import LoliwareFooter from '../Footer/Loliware/Footer';

const BrandLayout: React.FC = () => {
  const { subbrand } = useParams<{ subbrand: string }>();

  console.log('BrandLayout param:', subbrand);

  // Fallback if subbrand is missing or unknown
  if (!subbrand || !(subbrand in subbrandConfigs)) {
    return <Navigate to="/ah" replace />;
  }

  const config = subbrandConfigs[subbrand as SubbrandKey];

  // Choose brand-specific header/footer
  const HeaderComponent =
    subbrand === 'gamehive'
      ? GameHiveHeader
      : subbrand === 'loliware'
      ? LoliwareHeader
      : AshHeader;

  const FooterComponent =
    subbrand === 'gamehive'
      ? GameHiveFooter
      : subbrand === 'loliware'
      ? LoliwareFooter
      : AshFooter;

  return (
    <div className="layout">
      <HeaderComponent
        brandName={config.name}
        basePath={`/${subbrand}`}
        navItems={config.navItems}
      />

      <main className="content">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
};

export default BrandLayout;
