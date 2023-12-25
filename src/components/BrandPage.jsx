import { useEffect, useState } from "react"
import httpClient from "../services/httpClient"
import { useParams} from "react-router-dom";
import BikeItem from "./BikeItem";
export default function BrandPage() {
    let params = useParams()
    const [brandBikes, setBrandBikes] = useState([]);
    const [pageHeader, setPageHeading] = useState({});
    useEffect(() => {
        httpClient.get('brands/' + params.brandurl)
            .then((res) => {
                setBrandBikes(res.data.bikes)
                setPageHeading(res.data)
            })
    }, [params.brandurl])
    const bikesList = brandBikes.map((bike) => {
        return <div className="col-sm-6" key={bike.id}>
            <BikeItem bike={bike}  />
        </div>
    })
    return <div>
        <div className="container">
            <h1>
                {pageHeader.title}
            </h1>
            <p className="blockquote text-secondary">
                {pageHeader.description}
            </p>
            <div className="row">
                {bikesList}
            </div>
        </div>
    </div>
}   