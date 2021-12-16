import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function CryptoCard({ data }) {
  return (
    <div className="CryptoCard">
      <div className="crypto_card_header">
        <div
          className="crypto_card_logo_wrapper"
          style={{ backgroundColor: data.color }}
        >
          <img
            src={`/img/${data.logo}`}
            alt={data.name}
            className="crypto_card_logo"
          />
        </div>
        <div className="crypto_card_header_text">
          <p className="crypto_card_name">{data.name}</p>
          <p className="crypto_card_code">{data.code}</p>
        </div>
      </div>
      <div className="crypto_card_info">
        <div
          className={`crypto_card_price ${
            data.change >= 0 ? "success_color" : "failure_color"
          }`}
        >
          <span className="crypto_card_increase">{data.buy_price} </span>
          <span className="crypto_card_increase_rate">
            ({data.change_percentage} %)
          </span>
          {data.change >= 0 ? (
            <ArrowDropUpIcon className="crypto_card_price_arrow_wrapper" />
          ) : (
            <ArrowDropDownIcon className="crypto_card_price_arrow_wrapper" />
          )}
        </div>
        <p className="crypto_card_change">CHANGE</p>
        <div className="crypto_card_line" />
        <div className="crypto_card_limit_wrapper">
          <div className="crypto_card_limit">
            <p className="crypto_card_limit_price">{data.buy_price}</p>
            <p className="crypto_card_limit_text">Buy</p>
          </div>
          <div className="crypto_card_line_ver" />
          <div className="crypto_card_limit">
            <p className="crypto_card_limit_price">{data.sell_price}</p>
            <p className="crypto_card_limit_text">Sell</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoCard;
