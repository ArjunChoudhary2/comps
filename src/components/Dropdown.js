import { useState, useEffect, useRef } from "react";
import { GoArrowDown, GoArrowLeft } from "react-icons/go";
import Panel from "./Panel";

//UPDATED PROP NAMES TO ONCHANGE FROM ONSELECT AND VALUE FROM OPTIONS

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (event) => {
        if(!divEl.current){
            return;
        }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoArrowDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOption} </Panel>}
    </div>
  );
}

export default Dropdown;
