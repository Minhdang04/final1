import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({name, done, onToggle, onTrash}) => {
  return (
    <div className={'task ' + (done?'done':'')}>
        <input type="checkbox" defaultChecked={done} onClick={() => onToggle(!done)}/>
        {name}
        <button className="trash" onClick={onTrash}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    </div>
  )
}

export default Task
