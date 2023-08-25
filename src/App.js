import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  //UPDATED PROP NAMES TO ONCHANGE FROM ONSELECT AND VALUE FROM OPTIONS
  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
}

export default App;
