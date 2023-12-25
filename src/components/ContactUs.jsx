import {
    Form,
    Row,
    Col,
    FormGroup,
    Input,
    Label,
    Button

} from 'reactstrap';
const ContactUs = () => {
    return <div>
        <div className="container-fluid small-banner-image">
            <div className="small-banner-overlay"></div>
            <div className='container pt-4 position-relative'>
                <div className='row'>
                    <div className='col-md-6 m-auto fw-bold text-white border border-3 p-5 form-box'>
                        <h2 className='text-center mb-4'>Contact Us</h2>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="firstname">
                                            First Name
                                        </Label>
                                        <Input
                                            className='bg-transparent text-white'
                                            id="firstname"
                                            name="firstname"
                                            // placeholder="Type Your First Name"
                                            type="firstname"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="lastname">
                                            Last Name
                                        </Label>
                                        <Input
                                            className='bg-transparent text-white'
                                            id="lastname"
                                            name="lastname"
                                            // placeholder="Type Your Last Name"
                                            type="lastname"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            className='bg-transparent text-white'
                                            id="exampleEmail"
                                            name="email"
                                            // placeholder="Type Email"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Password
                                        </Label>
                                        <Input
                                            className='bg-transparent text-white'
                                            id="examplePassword"
                                            name="password"
                                            // placeholder="password"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleAddress">
                                    Address
                                </Label>
                                <Input
                                    className='bg-transparent text-white'
                                    id="exampleAddress"
                                    name="address"
                                // placeholder="1234 Main St"
                                />
                            </FormGroup>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleCity">
                                            City
                                        </Label>
                                        <Input
                                            className='bg-transparent text-white'
                                            id="exampleCity"
                                            name="city"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState">
                                            State
                                        </Label>
                                        <Input
                                            className='bg-transparent text-white'
                                            id="exampleState"
                                            name="state"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleZip">
                                            Zip
                                        </Label>
                                        <Input
                                            className='bg-transparent text-white'
                                            id="exampleZip"
                                            name="zip"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup check>
                                <Input
                                    id="exampleCheck"
                                    name="check"
                                    type="checkbox"
                                />
                                <Label
                                    check
                                    for="exampleCheck"
                                >
                                    Check me out
                                </Label>
                            </FormGroup>
                            <Button>
                                Sign in
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid p-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905897242!2d76.68831172108816!3d30.7324019835357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed887a3ebcdb%3A0xb9e3d29d8ad76196!2sPanjab%20University!5e0!3m2!1sen!2sin!4v1703436845019!5m2!1sen!2sin" 
            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" title='myframe'></iframe>
        </div>
    </div>
}
export default ContactUs;