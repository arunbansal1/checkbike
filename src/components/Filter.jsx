import {  FiMinus } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import React, { useContext, useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Context } from "./contextApi";
function Filter(args) {
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isBrandOpen2, setIsBrandOpen2] = useState(true);
    const [isBrandOpen3, setIsBrandOpen3] = useState(true);
    const toggleHandle = () => setIsBrandOpen(!isBrandOpen);
    const toggleHandle2 = () => setIsBrandOpen2(!isBrandOpen2);
    const toggleHandle3 = () => setIsBrandOpen3(!isBrandOpen3);
    const {brands, setBrands, fuelType, setFuelType, setEngine} = useContext(Context);
   
    const brandList = [
        "Bajaj", "Hero", "Honda", "Royal Enfield", "Suzuki", "TVS", "Yamaha"
    ]
    const fuelTypeList = [
        "Electric", "Petrol"
    ]
    function onChangeBrandHandle(event) {
        let value = event.target.value;
        let check = event.target.checked;
        if (check) {
            brands.push(value);
            setBrands([...brands]);
        } else {
            setBrands(brands.filter((e) => e !== value));
        }

    }
    function onChangeFuelType(e) {
        let value = e.target.value;
        let check = e.target.checked;
        fuelType[value] = check;
        if (check) {
            setFuelType([
                ...fuelType, value
            ])
        }
        else {
            setFuelType(fuelType.filter((e) => (e !== value)))
        }
    }
    function onChangeEngineValue(e){
        const ccvalue = parseInt(e.target.value)
        if(ccvalue> 0){
            setEngine(ccvalue);
        }else {
            setEngine(0);
        }
        
    }
    // console.log(brands)
    // console.log(fuelType)
    // console.log(engine)
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="brand-filter border-1">
                        <h5 onClick={toggleHandle} role="button" className="pointer-cursor">
                            Company Brands
                            <span className="float-end">
                                {!isBrandOpen ? <IoMdAdd /> : <FiMinus />}
                            </span>
                        </h5>
                        <Collapse isOpen={isBrandOpen} {...args}>
                            <Card className="border-0">
                                <CardBody className="p-0">
                                    {
                                        brandList.map(function (sBrand) {
                                            return <div className="form-check" key={sBrand}>
                                                <input className="form-check-input" type="checkbox" value={sBrand} id={sBrand} onChange={onChangeBrandHandle} />
                                                <label className="form-check-label" htmlFor={sBrand}>
                                                    {sBrand}
                                                </label>
                                            </div>
                                        })
                                    }
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="brand-filter border-1">
                        <h5 onClick={toggleHandle2} role="button" className="pointer-cursor">
                            Fuel Type
                            <span className="float-end">
                                {!isBrandOpen2 ? <IoMdAdd /> : <FiMinus />}
                            </span>
                        </h5>
                        <Collapse isOpen={isBrandOpen2}>
                            <Card className="border-0">
                                <CardBody className="p-0">
                                    {
                                        fuelTypeList.map((sFuel) => {
                                            return <div key={sFuel} className="form-check">
                                                <input className="form-check-input" type="checkbox" value={sFuel} id={sFuel} onChange={onChangeFuelType} />
                                                <label className="form-check-label" htmlFor={sFuel}>
                                                    {sFuel}
                                                </label>
                                            </div>
                                        })
                                    }
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="brand-filter border-1">
                        <h5 onClick={toggleHandle3} role="button" className="pointer-cursor">
                            Engine Power
                            <span className="float-end">
                                {!isBrandOpen3 ? <IoMdAdd /> : <FiMinus />}
                            </span>
                        </h5>
                        <Collapse isOpen={isBrandOpen3}>
                            <Card className="border-0">
                                <CardBody className="p-0">
                                     <input placeholder="Please enter of Engine" type="number" className="form-control" onChange={onChangeEngineValue} name="ccValue" />
                                    <p className="small text-info">
                                        <AiOutlineExclamationCircle /> Please enter minmum value of engine in CC
                                        <br/>
                                        ex: 50 (50 cc)
                                    </p>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </li>
                {/* <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
            </ul>


        </>
    );
}
export default Filter;