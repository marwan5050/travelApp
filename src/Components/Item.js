import React from 'react';






export default function Item({ item, DeleteItem, UpdatedItem }) {

  return (
    <>
      <li>
        <input type='checkbox' value={item.packed} onChange={() => UpdatedItem(item.id)} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.description} {item.quantity}
        </span>
        <button onClick={() => DeleteItem(item.id)}>❌</button>
      </li>

    </>
  );

}
