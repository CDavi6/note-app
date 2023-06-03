import React from "react";
import { useSelector } from "react-redux";

function ItemDetails({ selectedItem }) {
  const items = useSelector((state) => state.items);

  const selectedItemData = items.find((item) => item.title === selectedItem);

  return (
    <div>
      {selectedItemData && (
        <>
          <h2>{selectedItemData.title}</h2>
          <p>{selectedItemData.text}</p>
        </>
      )}
    </div>
  );
}

export default ItemDetails;
