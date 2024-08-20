import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar/NavigationBar';
import HebergementList from './pages/HebergementList';
import AboutUs from './section/AboutUs';
import Destination from './section/Destination';
import Testimonials from './section/Testimonials';

function App() {
  return (
    <div>
        <NavigationBar />
        <AboutUs />
        <HebergementList />
        <Destination/>
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;
