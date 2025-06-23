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

{
  /* Loliware */
}
import Loliware from './pages/Loliware/Loliware';
import LoliwareBrand from './pages/Loliware/LoliwareBrand';

{
  /* Coo */
}
import Coo from './pages/Coo/Coo';

{
  /* GameHive */
}
import GameHiveMain from './pages/GameHive/GameHiveMain';
import GameHiveInfo from './pages/GameHive/GameHiveInfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path=":subbrand/*" element={<BrandLayout />}>
          {/* Ash subpages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="coo" element={<Coo />} />
          {/* <Route path="gardenparty" element={<GardenParty />} /> */}

          {/* Loliware subpages */}
          <Route path="web" element={<Loliware />} />
          <Route path="brand" element={<LoliwareBrand />} />

          {/* GameHive subpages */}
          <Route path="app" element={<GameHiveMain />} />
          <Route path="info" element={<GameHiveInfo />} />

          {/* Fallback for bad page under valid brand */}
          <Route path="*" element={<Navigate to="." replace />} />
        </Route>

        {/* Fallback for bad brand */}
        <Route path="*" element={<Navigate to="/ah" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
