import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import GameHive from './pages/GameHive/GameHive';
import GardenParty from './pages/GardenParty/GardenParty';
import Loliware from './pages/Loliware/Loliware';
import Coo from './pages/Coo/Coo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="layout">
      <Router
        basename="/ash-designs"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gamehive" element={<GameHive />} />
            <Route path="/garden-party" element={<GardenParty />} />
            <Route path="/loliware" element={<Loliware />} />
            <Route path="/coo" element={<Coo />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
