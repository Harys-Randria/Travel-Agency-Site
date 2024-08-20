import './App.css';
import Footer from './components/Footer';
import DestinationsList from './pages/DestinationList';
import HeroSection from './pages/HeroSection';
import OfferList from './pages/OfferList';

function App() {
  return (
    <div>
        <HeroSection />
        <DestinationsList />
        <OfferList />
        <Footer />
    </div>
  );
}

export default App;
