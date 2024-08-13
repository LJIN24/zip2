import React, { useState } from 'react';
import Add from './Add';
import Todo from './Todo';

const List = () => {
    const [task, setTask] = useState([
        {
            id: 1,
            title: '운동하기',
            status: false
        },
        {
            id: 2,
            title: '코딩공부하기',
            status: false
        },
    ])
    const addTaskHandler = (todo) => {
        setTask([...task, todo])
    }
    const deleteTaskHandler=(deleted)=>{
        setTask(task.filter((t)=>t.id!==deleted.id))
    }
    return (
        <section>
            <ul>{task.map((todo) =>
                <Todo key={todo.id} todo={todo} handleDelete={deleteTaskHandler} >
                    
                </Todo>)}
            </ul>
            <Add todo={task} handleAdd={addTaskHandler} />
        </section>
    );
};

export default List;