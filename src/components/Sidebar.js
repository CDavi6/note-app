import { useState } from "react";
import { useRef } from "react";

function Sidebar() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const addItem = () => {
    if (input != "") {
      setItems([...items, { id: items.length, value: input }]);
    }
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="h-full w-80 fixed top-0 left-0 bg-neutral overflow-x-hidden flex flex-col justify-top">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered m-2"
          onChange={updateInput}
          ref={inputRef}
        />
        <button
          className="btn btn-success m-2"
          onClick={() => {
            addItem(); clearInput();
          }}
        >
          New Note
        </button>
        <br />
        <br />
        <div>
          <ul>
            {items.map((item) => (
              <button className="btn btn-primary m-2 w-72" key={item.id}>
                {item.value}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
