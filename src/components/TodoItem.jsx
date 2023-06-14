import React from 'react'

const TodoItem = (props) => {
  return (
    <div classname='todo-item'>
      <input type="checkbox" onChange={()=>props.completed(props.id)} />
      <a className='ml-l'>{props.item}</a>
    </div>
  )
}

export default TodoItem