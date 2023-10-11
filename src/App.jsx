import { useState } from "react";
import Picker from "./Picker";

const App = () => {
  const [selectedColor, setSeletedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <Picker selectedColor={selectedColor} setSeletedColor={setSeletedColor} />
    </div>
  );
};

export default App;
