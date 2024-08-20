import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar/NavigationBar';
import DestinationsList from './pages/DestinationList';
import HebergementList from './pages/HebergementList';
import HeroSection from './pages/HeroSection';
import OfferList from './pages/OfferList';
import AboutUs from './section/AboutUs';
import Destination from './section/Destination';

function App() {
  return (
    <div>
        <NavigationBar />
        <HeroSection />
        <HebergementList />
        <AboutUs />
        <Destination/>
        <DestinationsList />
        <OfferList />
        <Footer />
    </div>
  );
}

export default App;
