import Header from './components/Header';
import Footer from './components/Footer';
import httpClient from './services/httpClient';
import "./App.scss";
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BrandPage from './components/BrandPage';
import { Provider } from './components/contextApi';
import SearchPage from './components/searchPage';
function App() {
  const [bikes, setBikes] = useState([])
  const [searchString,setSearchString] = useState([])
  useEffect(function () {
    httpClient.get("bikes")
      .then((res) => {
        setBikes(res.data.data)
      })
  }, [])
  // function upDateSearch(){
  //      setSearchResult()
  // }
  return (
    <div className='app'>
      <Provider value={{setSearchString:setSearchString}}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage bikes={bikes} />} />
        <Route path='/brand/:brandurl' element={<BrandPage />} />
        <Route path='/search-page' element={<SearchPage/>}/>
      </Routes>
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
