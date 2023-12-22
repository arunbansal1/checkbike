import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';
// import { } from 'react-icons';
import { ImPower } from "react-icons/im";
import { FaBatteryFull, FaSuperpowers } from "react-icons/fa";
export default function BikeCard(params) {
    const bike = params.bike;
    return <Card>
        <img alt="Sample" src={bike.webpImage} />
        <CardBody>
            <CardTitle tag="h5">
                {bike.variantName}
            </CardTitle>
            <div className='d-flex justify-content-between my-2'>
                <div>
                    <FaBatteryFull /> {bike.fuelType}
                </div>
                <div>
                    <FaSuperpowers /> {bike.engine}
                </div>
                <div>
                    <ImPower /> {bike.maxPower ? bike.maxPower : 'NA'}
                </div>

            </div>
            <CardText>
                <b>Price:</b> {bike.priceRange}
            </CardText>
            <Button outline color='dark' className='w-100' >
                View more Detail
            </Button>
        </CardBody>
    </Card>
}