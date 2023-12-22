import BikeItem from './components/BikeItem';
import Header from './components/Header';
import "./App.scss";
import MainSliders from './components/MainSliders';
import BikeCard from './components/BikeCard';
import httpClient from './services/httpClient';
import { useEffect, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
function App() {
  const [bikes, setBikes] = useState([])
  useEffect(function () {
    httpClient.get("/")
      .then((res) => {
        // console.log(res.data.data.primaryData.items);
        setBikes(res.data.data.primaryData.items)
      })
  }, [])
  console.log(bikes)
  const allbikes = bikes.map((bike) => {
    return <div className='col-md-4 col-sm-6 mb-4' key={bike.id}>
      <BikeCard bike={bike} />
    </div>
  })
  return (
    <div>
      <Header />
      <MainSliders />
      <div className='overview-area text-md-start text-center'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h2 className='display-6 mt-5'>
                <span className='text-primary fw-bold'>
                  OSWAN
                </span> &nbsp;
                <span>
                  WORLD MOST LATGEST&nbsp;
                </span>
                <span className='fw-bold'>
                  MOTORCYCLE STORE
                </span>
              </h2>
              <p className='my-4 blockquote'>
                <b>
                OSWAN&nbsp; 
                </b> 
                the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat 
                facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam
              </p>
              <h4 className='fw-bolder'>
                HAVE ANY QUESTION?
              </h4>
              <a href='tel:+91 9999 658 698' className='btn btn-outline-primary btn-lg'>
              <FaPhoneAlt /> +91 9999 658 698
              </a>
            </div>
            <div className='col-md-6'>
                <div className='overview-image'>
                  <img src="images/banner-1.webp" className='img-fluid'/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5'>
        <div className='container'>
          <h2 className='h1 text-center mb-4'>Choose Your Bike</h2>
          <div className='row'>
            {allbikes}
          </div>
        </div>
      </div>
      {/* <button className='btn btn-primary'> Blue</button> */}
    </div>
  );
}

export default App;
