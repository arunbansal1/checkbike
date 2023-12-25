import { useEffect, useState } from 'react';
import CompareCard from './CompareCard';
import httpClient from '../services/httpClient';
import { Alert } from 'reactstrap';
function Compare() {
    const [bikeData, setBikeData] = useState([]);
    useEffect(function () {
        httpClient.get('bikes-all').then(function (res) {
            setBikeData(res.data)
        })
    }, [])
    const compareBikes = [
        {
            title: "Select First Bike",
            key: "firstBike"
        },
        {
            title: "Select Second Bike",
            key: 'secondBike'
        },
        {
            title: "Select Third Bike",
            key: 'thirdBike'
        }
    ]

    const [selectedBike, setSelectedBike] = useState({
        firstBike: null,
        secondBike: null,
        thirdBike: null
    })

    function getBikeOnSelect(bikeKey, bikeID) {
        bikeID = parseInt(bikeID);
        // selectedBike[bikeKey] = bikeID
        const sBikeData = bikeData.find((sBike) => {
            return sBike.id === bikeID
        });
        selectedBike[bikeKey] = sBikeData;
        setSelectedBike({ ...selectedBike });
    }

    const selectBikeArray = [selectedBike.firstBike, selectedBike.secondBike, selectedBike.thirdBike];
    // console.log(selectBikeArray);
    const arry = selectBikeArray.filter((sArrary) => {
        if (sArrary !== undefined && sArrary !== null) {
            return true
        }
        return false
    })
    // console.log('arry',arry.length)   
    // console.log("selectedBikesData", arry);
    const cards = compareBikes.map(function (scard) {
        return <CompareCard key={scard.title} imgUrl={selectedBike[scard.key]?.webpImage} onSelectBike={getBikeOnSelect} bikeKey={scard.key} title={scard.title} bikeList={bikeData} />;
    })
    return <div className='container py-4'>
        <div className='row mb-4'>
            {cards}
        </div>
        {/* <div className='text-center my-4'>
            <button className='btn btn-primary'>Compare Bikes</button>
        </div> */}
        {arry.length > 1 && <div className='row'>
            <div className='col-sm-3'>
                <ul className="list-group">
                    <li className="list-group-item fw-bold">Brand Name</li>
                    <li className="list-group-item fw-bold">Variant Name</li>
                    <li className="list-group-item fw-bold">Price</li>
                    <li className="list-group-item fw-bold">Engine</li>
                    <li className="list-group-item fw-bold">Mileage</li>
                    <li className="list-group-item fw-bold">Power</li>
                    <li className="list-group-item fw-bold" >Fuel Type</li>
                </ul>
            </div>
            {
                selectBikeArray.map((sBike) => {
                    if (!sBike) return <div className='col-sm-3'>
                        <Alert color='warning'>There is no bike</Alert>
                    </div>
                    return <div className='col-sm-3'><ul className="list-group">
                        <li className="list-group-item">{sBike.brandName}</li>
                        <li className="list-group-item">{sBike.variantName}</li>
                        <li className="list-group-item">{sBike.priceRange}</li>
                        <li className="list-group-item">{sBike.engine}</li>
                        <li className="list-group-item">{sBike.mileage || 'NA'}</li>
                        <li className="list-group-item">{sBike.maxPower}</li>
                        <li className="list-group-item">{sBike.fuelType}</li>
                    </ul></div>
                })
            }
        </div>}
    </div>
}
export default Compare;