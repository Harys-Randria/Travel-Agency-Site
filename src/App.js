import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar/NavigationBar';
import HomePage from './pages/HomePage';
import TripPage from './pages/TripPage';
import DetailsPage from './pages/DetailsPage';
import MySection from './components/sample/MySection';
import { ParallaxProvider } from 'react-scroll-parallax';
import CarRentalPage from './pages/CarRentalPage';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className='font-Poppins'>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trip" element={<TripPage />} />
            <Route path="/destination-details/:id" element={<DetailsPage />} />
            <Route path='/sample' element={ <MySection /> } />
            <Route path='/cars' element={ <CarRentalPage /> } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
