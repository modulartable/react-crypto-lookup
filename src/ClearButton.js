import React from 'react'
import { Button } from '@mui/material'

const ClearButton = (props) => {

    let clearSearch = props.clearSearch;

    return (
        <div>
            <Button variant="contained" style={{ backgroundColor: '#E35C06' }} onClick={() => {clearSearch()}}>Clear</Button> 
        </div>
    )
}

export default ClearButton
