import "./App.css";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import Results from "./Results";
import Favorites from "./Favorites";
import useLocalStorage from "./hooks/useLocalStorage";


function App() {
  //Initializing a input state to track user inputs

  const [input, setInput] = useState("");

  //Initiliazing a crypto state to hold all of the crypto data that is fetched from Binance's API below

  const [crypto, setCrypto] = useState([]);


  //Initiliazing a state to track the user's favorite cryptocurrencies, which are added to a watchlist

  const [favorites, setFavorites] = useLocalStorage("favorites", [])

  //Fetching the JSON object array from Binance and setting the crypto state as the fetched data using async await

  const getCrypto = async () => {
    try {
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/price"
      );
      const data = await response.json();
      data.map((el) => (el.key = el.symbol));
      setCrypto(data);
    } catch (error) {
      console.error(error);
    }
  };


  //A filter for the crypto array, which filters based on if the user's imput matches any of the crypto names and also validates the user's input

  const searchCrypto = () => {
    let searchFilter = crypto.filter((el) => el.symbol.includes(input));

    let regex = /[0-9|`|~|!|@|#|$|%|^|&|\*|\(|\)|\+|=|\[|\{|\]|\}|\||\\|'|<|,|\.|>|\?|\/|""|;|:]/g;

    let match = input.match(regex);

    console.log(match);

    if (input === "") {
      window.alert("Please enter the name of a cryptocurrency");
    } 
   else {
    setCrypto(searchFilter);
   }
    };

  //Clears the search input and triggers the getCrypto function to return the data to its original state

  const clearSearch = () => {
    setInput("");
    getCrypto();
  };

  //A useEffect to update localstorage anytime the favorites are updated and to also run on the first render of the app.

  useEffect(() => {
 localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  //A useEffect to have the getCrypto function run on first render

  useEffect(() => {
    getCrypto();
  }, []);

  return (
    <div>
      <div id="header">

        <SearchBox
          input={input}
          clearSearch={clearSearch}
          setInput={setInput}
          searchCrypto={searchCrypto}
        />
      </div>

      <div id="container">
        <Results crypto={crypto} setFavorites={setFavorites} favorites={favorites} />
       <Favorites favorites={favorites} setFavorites={setFavorites} /> 
      </div>
    </div>
  );
}

export default App;
