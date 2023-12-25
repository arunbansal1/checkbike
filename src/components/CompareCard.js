import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';
function CompareCard({ title, bikeList, bikeKey, onSelectBike, imgUrl }) {
    const bikeOptions = bikeList.map((sbike) => {
        return <option key={sbike.id} value={sbike.id}>{sbike.variantName}</option>
    })
    function onSelectBikeHandler(e, bikeKey) {
        onSelectBike(bikeKey, e.target.value)
    }
    return <div className='col-md-4 col-sm-6 pt-4'>
        <Card>
            <img
                className='zoom'
                alt="Sample"
                src={imgUrl ? imgUrl : '../images/bike-placeholder.webp'}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardText>
                    <select className='form-control' onChange={(e) => onSelectBikeHandler(e, bikeKey)}>
                        <option>
                            Select Bike
                        </option>
                        {
                            bikeOptions
                        }
                    </select>
                </CardText>
            </CardBody>
        </Card>
    </div>
}
export default CompareCard;