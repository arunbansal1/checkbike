import {
    Form,
    Input,
    Button
} from 'reactstrap';
import { useState,useContext } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Context } from './contextApi';
function SearchBar() {
    const [input, setInput] = useState({});
    const navigate = useNavigate()
    const { setSearchResult } = useContext(Context);
    function onChangeHandler(event) {
        let inputElem = event.target;
        setInput(inputElem.value)
    }
    function onClickHandler() {
        console.log(input)
        // setSearchResult(input)
        navigate('/search-page?q='+input)
        // setSearchResult(input)
    }
    function onSubmitHandler(e){
        e.preventDefault();
    }
    return <Form className='ms-auto' onSubmit={onSubmitHandler}>
        <div className="input-group">
            <input type="text" onChange={onChangeHandler} className="form-control border-0 search-bar" placeholder="search you" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            <button className="input-group-text bg-white" type='button' onClick={onClickHandler} id="btnGroupAddon"><FaMagnifyingGlass /></button>  
        </div>
    </Form>
}
export default SearchBar;