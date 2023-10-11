import Color from "./Color";

const Picker = ({ selectedColor, setSeletedColor }) => {
  return (
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
  );
};

export default Picker;
