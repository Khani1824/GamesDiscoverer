import { useState } from "react";

// We want to be able to pass {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // Function that takes parameters of type string (itme: string) and returns void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook: function that allows us to tap into built in features in react
  // This is a state Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // How we tell rect that out componete cant have state

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // Selects one item at a time
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // Making each item a clickable item.
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
