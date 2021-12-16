import SearchIcon from "@mui/icons-material/Search";
import ListItem from "./ListItem";
import { useState, useEffect } from "react";

function Sidebar({ cryptos, curListItemIndex, setCurListItemIndex, menuBtn }) {
  let list = [];
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    for (var i = 0; i < cryptos.length; i++) {
      list.push(
        <ListItem
          key={i}
          index={i}
          data={cryptos[i]}
          curListItemIndex={curListItemIndex}
          setCurListItemIndex={setCurListItemIndex}
        />
      );
    }

    setListItems(list);
  }, [curListItemIndex, setListItems]);

  return (
    <div className={`Sidebar ${menuBtn ? "" : "sidebar_hide"}`}>
      <div
        onClick={() => setCurListItemIndex(-1)}
        className="sidebar_header"
        href="#"
      >
        <b>&lt;</b> Cryptos ({cryptos.length})
      </div>
      <div className="sidebar_search_box">
        <div className="sidebar_search_icon_wrapper">
          <SearchIcon className="sidebar_search_icon" />
        </div>
        <input
          className="sidebar_search_input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="line"></div>
      <div className="sidebar_list">{listItems}</div>
    </div>
  );
}

export default Sidebar;
