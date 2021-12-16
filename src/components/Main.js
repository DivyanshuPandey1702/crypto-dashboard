import CryptoCard from "./CryptoCard";
import { useState, useEffect } from "react";

function Main({ cryptos, curListItemIndex, menuBtn }) {
  let cards = [];
  const [cardItems, setCardItems] = useState();

  useEffect(() => {
    for (var i = 0; i < cryptos.length; i++) {
      cards.push(<CryptoCard key={i} data={cryptos[i]} />);
    }

    setCardItems(cards);
  }, [setCardItems]);

  return (
    <div className={`Main ${menuBtn ? "main_hide" : ""}`}>
      <div className="main_header_wrapper">
        <img src="/img/btc.png" alt="Crypto Img" className="crypto_logo" />
        <div className="main_header_text">My Cryptos</div>
      </div>
      <div className="crypto_card_container">
        {curListItemIndex >= 0 && curListItemIndex < cryptos.length ? (
          <CryptoCard key={curListItemIndex} data={cryptos[curListItemIndex]} />
        ) : (
          cardItems
        )}
      </div>
    </div>
  );
}

export default Main;
