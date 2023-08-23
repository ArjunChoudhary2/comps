import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderdItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    
    return (
      <div>
        <div onClick={() => { setExpandedIndex(index)}}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderdItems}</div>;
}

export default Accordion;
