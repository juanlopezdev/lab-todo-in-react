import React from 'react';
import { BsCheckCircle, BsFillTrashFill } from 'react-icons/bs';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
          <BsCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
          <BsFillTrashFill />
      </span>
    </li>
  )
}

export { TodoItem }