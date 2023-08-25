import { useState } from "react";

//UPDATED PROP NAMES TO ONCHANGE FROM ONSELECT AND VALUE FROM OPTIONS

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleListItemClick = (ListItem) => {
    //CLOSE DROPDOWN
    setIsOpen(false);
    //WHAT OPTION USER HAS SELECTED
    onChange(ListItem);
  };

  const renderedOption = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor pointer p-1"
        onClick={() => handleListItemClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //THE EXPERESSION selection?.label GIVES UNDEFINED IF SELECTION.LABEL IS NULL OR UNDEFINED INSTEAD OF AN ERROR
  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border-rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOption}{" "}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
