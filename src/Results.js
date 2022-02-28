import React from "react";
import CryptoCard from "./CryptoCard";
import { FixedSizeList } from "react-window";
import "./Results.css";
import AutoSizer from "react-virtualized-auto-sizer";
import heart from './heart-regular.svg'



const Results = (props) => {

//Setting the crypto data prop to a variable for readability

  let crypto = props.crypto;
  let setFavorites = props.setFavorites;
  let favorites = props.favorites;


  //Implementation of React-Virtualized
  //The row function acts similiarly to a map method to take each object in the array and output it in the windowed-list.

  const Row = ({ style, index }) => {
    let item = crypto[index];
    return (
      <div style={style}>
        <CryptoCard symbol={item.symbol} price={item.price} />
        <img className="favoriteIcon" src={heart} alt="favorite icon" onClick={() => {setFavorites([...favorites, item])}}/>
      </div>
    );
  };

  return (

    //Implementation of React-window and React-virtualized's Autosizer and Fixedsizelist components to have the large dataset virtualized
    
// After doing some testing and reading online I found with utilizing Autosizer as a standalone package you have to specify the default height and width or it outputs the height and width as 0 automatically

    <div id="cryptoContainer">

      <div style={{ width: '50vw', height: '100vh' }}>

        <AutoSizer
        defaultHeight={1}
        defaultWidth={1}
        >
          {({ height, width }) => (
              <FixedSizeList
                width={width}
                height={height}
                itemSize={150}
                itemCount={crypto.length}
              >
                {Row}
              </FixedSizeList>
            )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default Results;
