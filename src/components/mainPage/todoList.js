import React from 'react';
import Todo from "./todoRow";

const todoList = ({todos}) => {
    return (
        <ul>
            {todos.map((todo,i) => <Todo key = {todo._id} todo = {todo} />)}
        </ul>
    )
}

export default todoList;