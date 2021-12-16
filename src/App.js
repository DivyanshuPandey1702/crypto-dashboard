import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import data from "./data";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [cryptos, setCryptos] = useState(data());
  const [curListItemIndex, setCurListItemIndex] = useState(-1);
  const [menuBtn, setMenuBtn] = useState(false);

  return (
    <div className="App">
      <div onClick={() => setMenuBtn(!menuBtn)} className="menu_btn">
        {!menuBtn ? <MenuIcon /> : <CloseIcon />}
      </div>
      <Sidebar
        menuBtn={menuBtn}
        cryptos={cryptos}
        curListItemIndex={curListItemIndex}
        setCurListItemIndex={setCurListItemIndex}
      />
      <Main
        menuBtn={menuBtn}
        cryptos={cryptos}
        curListItemIndex={curListItemIndex}
      />
    </div>
  );
}

export default App;
