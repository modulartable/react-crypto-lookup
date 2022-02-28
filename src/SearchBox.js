import React from 'react'
import { TextField, Button } from '@mui/material';
import './SearchBox.css';
import ClearButton from './ClearButton';

const SearchBox = (props) => {

    let setInput = props.setInput;
    let searchCrypto = props.searchCrypto;
    let clearSearch = props.clearSearch;

    return (
        <div>
        <div style={{ margin: '10px' }}>
         <TextField label="Enter Symbol" type="text" value={props.input} onChange={(e) => {setInput(e.target.value)}} required />  
        </div>

        <div id="searchContainer">

        


        <div>
            <Button variant="contained" style={{ backgroundColor: '#E35C06' }} onClick={() => {searchCrypto()}}>Search</Button>
        </div>

        <div>
            <ClearButton clearSearch={clearSearch} />
        </div>


        </div>
        </div>
    )
}

export default SearchBox
