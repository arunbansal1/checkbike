import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
function BrandCard({brand}) {
    // console.log(brand)
    return <Card inverse>
        <CardBody>
            <Link to={'/brand/'+brand.url}>
                <CardTitle tag="h5">
                    <img src={brand.imgUrl} className='img-fluid' alt='brand-img'/>
                    <div className='my-1 text-center text-dark'>
                        {brand.text}
                    </div>
                </CardTitle>
            </Link>
        </CardBody>
    </Card>
}
export default BrandCard;