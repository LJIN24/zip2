import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Add = ({handleAdd,todo}) => {
    const [text,setText]=useState('')
    const addListHandler=(event)=>{
        event.preventDefault()  
        if(text.trim()!==''){
         handleAdd({id:uuidv4(),title:text,status:false})
         setText('') 
        }return
         
}
    const addInputHandler=(event)=>{
        setText(event.target.value)
    }
    return (
        <form onSubmit={addListHandler}>
            <input key={todo.id} value={text} onChange={addInputHandler} placeholder='Add'></input>
            <button>Add</button>
        </form>
    );
};

export default Add;