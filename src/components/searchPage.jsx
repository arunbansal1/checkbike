import React from 'react';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import httpClient from '../services/httpClient';
import BikeItem from './BikeItem';
import Filter from './Filter';
import { Provider } from './contextApi';
function SearchPage() {
    const [isLoading, setIsLoading] = useState(true)
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const [brands, setBrands] = useState([]);
    const [fuelType, setFuelType] = useState([]);
    const [engine, setEngine] = useState(0);

    let query = useQuery();
    // console.log("query", query.get("q"))
    let searchString = query.get("q");
    const [allBikes, setAllBikes] = useState([]);
    useEffect(() => {
        httpClient.get('bikes-all')
            .then((res) => {
                setAllBikes(res.data)
                setIsLoading(false)
            })
    }, [searchString])
    const filteredBikes = allBikes.filter((sbike) => {
        const variant = sbike.variantName.toLowerCase();
        if (
            (!searchString || variant.includes(searchString)) &&
            (brands.length === 0 || brands.includes(sbike.brandName)) &&
            (fuelType.length === 0 || fuelType.includes(sbike.fuelType)) &&
            (engine < sbike.ccValue)
        ) {
               return true
        }
        else {
            return false
        }
    }).map((sbike) => {
        return <div key={sbike.name} className='col-sm-6 mb-4'><BikeItem bike={sbike} /></div>
    })
    return <Provider value={{ brands, setBrands, fuelType, setFuelType, engine, setEngine }}>
        <div className='my-5 py-3'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-3 text-start'>
                        <Filter />
                    </div>
                    {isLoading ? <div className='col-sm-9'>
                        <div className='row alert alert-warning'>
                             please wait data is loading
                        </div>
                    </div>
                    :<div className='col-sm-9'>
                        <div className='row'>
                           {filteredBikes.length > 0 ? filteredBikes :<div className='h6 alert alert-warning'>There is no bikes according to set filters</div>}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </Provider>
}
export default SearchPage;