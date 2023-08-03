import React, { useState } from 'react';
import  Item  from '../Components/Item';

export default function PackingList({ createdItem, ClearList, DeleteItem, UpdatedItem }) {

  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = createdItem;

  if (sortBy === 'description') sortedItems = createdItem.slice()
    .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItems = createdItem.slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));


  return (
    <>

      <div className='list'>
        <ul>
          {sortedItems.map((item) => <Item item={item} key={item.id} DeleteItem={DeleteItem} UpdatedItem={UpdatedItem} />)}
        </ul>

        <div className='action'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value='input'>sort by input order</option>
            <option value='description'>sort by description</option>
            <option value='packed'>sort by packed stats</option>
          </select>

          <button onClick={ClearList}>clear list</button>
        </div>

      </div>
    </>
  );
}
