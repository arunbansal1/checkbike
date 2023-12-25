import {
    Form,
} from 'reactstrap';
import { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function SearchBar() {
    const [input, setInput] = useState(null);
    const navigate = useNavigate()
    function onChangeHandler(event) {
        let inputElem = event.target;
        setInput(inputElem.value)
    }
    function onClickHandler() {
        if(input != null){
            navigate('/search-page?q='+input)
        }
    }
    function onSubmitHandler(e){
        e.preventDefault();
        onClickHandler();
    }
    return <Form className='ms-auto' onSubmit={onSubmitHandler}>
        <div className="input-group">
            <input type="text" onChange={onChangeHandler} className="form-control border-0 search-bar" placeholder="search you" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            <button className="input-group-text bg-white" type='button' onClick={onClickHandler} id="btnGroupAddon"><FaMagnifyingGlass /></button>  
        </div>
    </Form>
}
export default SearchBar;