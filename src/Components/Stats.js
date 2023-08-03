import React from 'react';

export default function Stats({ items }) {

  if (!items.length) return (

    <p className='stats'>Start Adding Some Items To Your List 🚀</p>
  );

  const packedItems = items.filter((item) => item.packed).length;

  const persntage = Math.round((packedItems / items.length) * 100);

  return (
    <>
      <footer className='stats'>
        {persntage === 100 ? 'You Have Everything And Ready To Go ✈ 😎' :
          `💼 you have ${items.length} items on your list , and you already packed ${packedItems}
      (${persntage}%) `}
      </footer>
    </>
  );
}
