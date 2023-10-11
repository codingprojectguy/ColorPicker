import { useState } from "react";

// Write your Color component here
const Color = ({ color, selectedColor, setSeletedColor }) => {
  const isSelected = selectedColor === color;
  const className = isSelected ? `color ${color} selected` : `color ${color}`;
  return (
    <div className={className} onClick={() => setSeletedColor(color)}></div>
  );
};
const App = () => {
  const [selectedColor, setSeletedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          selectedColor={selectedColor}
          setSeletedColor={setSeletedColor}
        />
        <Color
          color="green"
          selectedColor={selectedColor}
          setSeletedColor={setSeletedColor}
        />
        <Color
          color="blue"
          selectedColor={selectedColor}
          setSeletedColor={setSeletedColor}
        />
      </div>
    </div>
  );
};

export default App;
