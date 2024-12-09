import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar/NavigationBar';
import HomePage from './pages/HomePage';
import { ParallaxProvider } from 'react-scroll-parallax';
import RentalCarPage from './pages/RentalCarPage';
import DestinationsPage from './pages/DestinationsPage ';
import DestinationDetails from './pages/DestinationDetails';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Navbar/Footer';
import ContactUs from './pages/ContactUs';
import TailorMadePage from './pages/TailorMadePage';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className='font-Poppins'>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destination" element={<DestinationsPage />} />
            <Route path="/destinations" element={<TailorMadePage />} />
            <Route path='/cars' element={ <RentalCarPage /> } />
            <Route path= '/destination/:id' element= { <DestinationDetails /> }/>
            <Route path= '/aboutus' element= { <AboutUsPage /> }/>
            <Route path= '/contactus' element= { <ContactUs /> }/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
