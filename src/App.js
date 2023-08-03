import React, { useState } from 'react';
import Logo from './Components/Logo';
import Form from './Components/Form';
import  PackingList  from './Components/PackingList';
import  Stats  from './Components/Stats';




export default function App() {

  const [items , setItems] = useState([]);

  function addItem(addNewItem){
    setItems((myItem)=> [...myItem , addNewItem]);
  }

  function DeleteItem(id){

    setItems((items)=> items.filter((item)=> item.id !== id));
  }

  function UpdatedItem(id){

    setItems((items)=> items.map(
      (item)=> item.id === id ? {...item , packed: !item.packed}:item));
  }

  function ClearList(){

    const confirmed = window.confirm('Are You Sure To Delete All Items?');

    if(confirmed === true){
      setItems([]);
    }
    
  }

  return (
    <>
    <div className='app'>
      <Logo />
      <Form  addCreatedItem={addItem}/>
      <PackingList  createdItem={items} ClearList={ClearList} DeleteItem={DeleteItem} UpdatedItem={UpdatedItem}/>
      <Stats items={items} />
    </div>
    </>
  )
}






