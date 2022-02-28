import './Favorites.css';
import brokenHeart from './heart-broken-solid.svg'
import { dollarFormat } from './CryptoCard';
import { Button } from '@mui/material'

const Favorites = (props) => {

    let favorites = props.favorites;
let setFavorites = props.setFavorites;

    return (
        <div>
        <div style={{ textAlign: 'center' }}>
        <h2>Favorites:</h2>
        <Button style={{ marginBottom: '15px' }} variant="contained" onClick={() => {setFavorites([])}}>Clear All</Button>
        </div>
        <div id="favoritesContainer">
        {favorites.length === 0 ? <div style={{ margin: '0 auto', textAlign: 'center' }}><h4>No favorites have been added...</h4></div> : '' }
        {favorites.map(el => 
        <div className='favorites'>
            <h3>{el.symbol}</h3>
            <h5>{el.price}</h5>
            <h5>{dollarFormat.format(el.price)}</h5>
            <img className="unfavorite" src={brokenHeart} alt="unfavorite icon" onClick={() => {setFavorites(favorites.filter(item => item.symbol !== el.symbol))}} />
        </div>
        )}
        
        </div>
        </div>
    )
}

export default Favorites
