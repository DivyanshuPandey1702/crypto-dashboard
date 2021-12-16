function ListItem({ index, data, curListItemIndex, setCurListItemIndex }) {
  return (
    <div onClick={() => setCurListItemIndex(index)}>
      <div
        className={`ListItem ${
          index === curListItemIndex ? "list_item_active" : ""
        }`}
      >
        <div>
          <img
            src={`/img/${data.logo}`}
            alt={data.name}
            className="crypto_logo"
          />
          <p className="list_item_crypto_code">{data.code}</p>
        </div>
        <p className="list_item_crypto_name">{data.name}</p>
      </div>
      <div className="line" />
    </div>
  );
}

export default ListItem;
