import React from 'react'

function Todo({text, todo, todos, setTodos}) {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    // const completeHandler = () => {
    //     setTodos(todos.map(item => {
    //         if(item.id === todo.id) {
    //             return {
    //                 ...item, completed: !item.completed // We're taking whatever the property of that item was and flipping it over by adding !
    //             }
    //         }
    //         return item; // In case it doesn't match.

    //     }))
    // }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed //Clicking on this allows us to toggle between true and false.
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
        </button>
    </div>
    )
}

export default Todo

