import { useState, useEffect } from 'react';
import httpClient from '../services/httpClient';
import BrandCard from './BrandCard';
function BrandList() {
    const [brands, setBrand] = useState([]);
    useEffect(() => {
        httpClient.get('brands')
            .then((res) => {
                // console.log(res.data)
                setBrand(res.data)
            })
    }, [])
    const setBrands = brands.map((brand) => {
        return <div key={brand.title} className='col-md-3 col-lg-2 col-sm-6 col-xs-6 mb-3'>
            <BrandCard className="my-2" brand={brand} />
        </div>
    })
    return <div className='banner-brand py-5'>
        <div className='brand-overlay'></div>
        <div className='container'>
            <h2 className='h1 text-center mb-3 text-light position-relative'>Top Brands</h2>
            <div className='row'>
                {setBrands}
            </div>
        </div>
    </div>
}

export default BrandList;