const Color = ({ color, selectedColor, setSeletedColor }) => {
  const isSelected = selectedColor === color;
  const className = isSelected ? `color ${color} selected` : `color ${color}`;
  return (
    <div className={className} onClick={() => setSeletedColor(color)}></div>
  );
};

export default Color;
