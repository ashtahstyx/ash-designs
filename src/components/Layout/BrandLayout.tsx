import React from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import {
  subbrandConfigs,
  type SubbrandKey,
} from '../../config/subbrandConfigs';

import Header from '../Header/Ash-Design/Header';
import Footer from '../Footer/Ash-Designs/Footer';

const BrandLayout: React.FC = () => {
  const { subbrand } = useParams<{ subbrand: SubbrandKey }>();

  if (!subbrand || !(subbrand in subbrandConfigs)) {
    return <Navigate to="/ash-designs" replace />;
  }

  const config = subbrandConfigs[subbrand];

  return (
    <div className="layout">
      <Header
        brandName={config.name}
        basePath={`/${subbrand}`}
        navItems={config.navItems}
      />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default BrandLayout;
