import React, { useState } from 'react';

const Todo = ({onAdd}) => {
    const [taskName, setTaskName] = useState();

    function submit(e){
        e.preventDefault();
        onAdd(taskName);
        setTaskName('')
    }

    return (
        <div className='Todo'>
        <h1>#todo</h1>
        <form onSubmit={submit}>
            <input  type='text' 
                    value={taskName} 
                    onChange={e => setTaskName(e.target.value)} 
                    placeholder='add details'/>
            <button>Add</button>
        </form>
        </div>
    )
}

export default Todo
