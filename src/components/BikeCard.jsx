import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';
import { ImPower } from "react-icons/im";
import { FaBatteryFull, FaSuperpowers } from "react-icons/fa";
import { FaEye } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
export default function BikeCard(params) {
    const bike = params.bike;
    return <Card className='bike-card'>
        <img alt="Sample" src={bike.webpImage} />
        <CardBody>
            <CardTitle tag="h5" title={bike.variantName}>
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
            <Button outline color='dark'>
                View Detail <FaEye />
            </Button>
            <Button outline color='dark' className='float-end'>
                Compare <IoMdAdd />
            </Button>
        </CardBody>
    </Card>
}