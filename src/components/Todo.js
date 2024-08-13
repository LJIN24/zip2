import React from 'react';
import { MdDelete } from "react-icons/md";

const Todo = ({handleDelete,todo}) => {
    return (
        <div>
            <input id='checkbox' type='checkbox'></input>
            <label></label>
            <button><MdDelete /></button>
        </div>
    );
};

export default Todo;