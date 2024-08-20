import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar/NavigationBar';
import DestinationsList from './pages/DestinationList';
import HebergementList from './pages/HebergementList';
import HeroSection from './pages/HeroSection';
import OfferList from './pages/OfferList';

function App() {
  return (
    <div>
        <NavigationBar />
        <HeroSection />
        <HebergementList />
        <DestinationsList />
        <OfferList />
        <Footer />
    </div>
  );
}

export default App;
