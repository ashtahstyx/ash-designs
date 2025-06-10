import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import GameHive from './pages/GameHive/GameHive';
import GardenParty from './pages/GardenParty/GardenParty';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router
      basename="/ash-designs"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gamehive" element={<GameHive />} />
          <Route path="/garden-party" element={<GardenParty />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
