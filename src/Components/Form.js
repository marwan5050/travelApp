import { useState } from "react";


export default function Form({addCreatedItem}){

    const [description , setDesc] = useState("");
    const [quantity , setQuantity] = useState(1);
  // i moved this state and function to lift up state to app component
    // const [createdItem , setCreatedItem] = useState([]);
  
    // function addItem(addNewItem){
    //   setCreatedItem((myItem)=> [...myItem , addNewItem]);
    // }
  
    function handleSubmit(e){
  
      e.preventDefault();
  
      if(!description) return;
  
     const newItem = {description , quantity   , packed: false , id:  Date.now()};
  
     console.log(newItem);
  
     addCreatedItem(newItem);
  
     setDesc("");
     setQuantity(1);
    }
  
  
  
  
   return(<>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>what do you need for your trip 🤔 ?</h3>
        <select value={quantity} onChange={(e)=> setQuantity(e.target.value)}>
  
          {Array.from({length:20} , (_ , i)=> i + 1).map((num)=>(
            <option value={num} key={num}>
              {num}
              </option>
          ))}
  
        </select>
        <input type='text' placeholder='item ...' value={description} 
        onChange={(e)=>setDesc(e.target.value)}/>
        <button>Add</button>
      </form>
   </>
   ) 
  }