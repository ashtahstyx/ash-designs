import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import BrandLayout from './components/Layout/BrandLayout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import GardenParty from './pages/GardenParty/GardenParty';
import Loliware from './pages/Loliware/Loliware';
import Coo from './pages/Coo/Coo';
import GameHive from './pages/GameHive/GameHiveMain';

// Pages for gamehive subbrand
import GameHiveInfo from './pages/GameHive/GameHiveInfo';

const App: React.FC = () => {
  return (
    <Router
      basename="/ash-designs"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <main>
        <Routes>
          <Route path="/:subbrand/*" element={<BrandLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gardenparty" element={<GardenParty />} />
            <Route path="loliware" element={<Loliware />} />
            <Route path="coo" element={<Coo />} />
            <Route path="gamehive" element={<GameHive />} />
            <Route path="info" element={<GameHiveInfo />} />
          </Route>

          {/* Redirect invalid URLs to default subbrand */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
