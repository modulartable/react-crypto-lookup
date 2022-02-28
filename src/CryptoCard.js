import React from 'react'
import { Card } from '@mui/material'
import { Typography } from '@mui/material';
import { CardContent } from '@mui/material';
import './CryptoCard.css'


export const dollarFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
    })

const CryptoCard = (props) => {

    return (
        <div>
            <Card variant="outlined" sx={{ backgroundColor: '#1565c0', color: '#FFFFFF', width: '50vw', textAlign: 'center' }}><CardContent><Typography variant="h5">{props.symbol}</Typography>
            <Typography variant="subtitle2">{props.price}</Typography>
            <Typography variant="h6">{dollarFormat.format(props.price)}USD</Typography>
            </CardContent>
            </Card>
            
        </div>
    )
}


export default CryptoCard
