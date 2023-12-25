import Header from './components/Header';
import Footer from './components/Footer';
// import httpClient from './services/httpClient';
import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BrandPage from './components/BrandPage';
import SearchPage from './components/searchPage';
import ContactUs from './components/ContactUs';
import Compare from './components/Compare';
import FallBack from './components/FallBack';
function App() {
  return (
    <div className='app'>
      <div className=''></div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/brand/:brandurl' element={<BrandPage />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/brand/contact-us' element={<ContactUs />} />
        <Route path='/brand/compare' element={<Compare />} />
        <Route path='*' element={<FallBack />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
