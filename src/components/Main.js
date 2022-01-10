import React, {useState} from 'react'
import { AddTodo } from './AddTodo'
import {Todo} from './Todo'

export const Main = ({todos, onDelete, component, addTodo, createTodo, updateTodo}) => {
   
    return (
        <div>
            <button className="btn btn-lg btn-outline-warning my-5" onClick={() => addTodo(true)}>Add+</button>
            {component === true && <AddTodo createTodo = {createTodo} addTodo = {addTodo} />}
            {todos.map(todo => <Todo key = {todo.id} todo={todo} onDelete={onDelete} />)}
        </div>
    )
}
