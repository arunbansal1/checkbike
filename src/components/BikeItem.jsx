import {
    CardGroup,
    CardText,
    Card,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardBody,
    Button,
} from 'reactstrap';
import { FaBatteryFull, FaSuperpowers } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';
import { IoMdAdd } from 'react-icons/io';
import { FaEye } from 'react-icons/fa6';
function BikeItem({ bike }) {
    return <CardGroup className='mb-4'>
        <Card>
            <div className='row'>
                <div className='col-md-6'>
                    <CardImg
                        alt={bike.variantName}
                        src={bike.image}
                        top
                        className='img-fluid h-100 object-fit-cover'
                    />
                </div>
                <div className='col-md-6'>
                    <CardBody>
                        <CardTitle tag="h5">
                            {bike.variantName}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {bike.brandName}
                        </CardSubtitle>
                        <CardText>
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
                            {bike.priceRange}
                        </CardText>
                        <Button color='dark' outline>
                            Detail <FaEye />
                        </Button>
                        <Button className='float-end' color='dark' outline>
                            Compare <IoMdAdd />
                        </Button>
                    </CardBody>
                </div>
            </div>
        </Card>
    </CardGroup>
}
export default BikeItem;