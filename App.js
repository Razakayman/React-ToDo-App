import React, { useState, useEffect } from "react";
import './App.css';
import Form from './components/form'
import TodoList from './components/todoList'


function App() {
  //STATE
  const [inputText, setinputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilterTodos] = useState([])
  //Run Once when the app starts
useEffect(() => {
  getLocalTodos();
}, [])
   //USE EFFECT
   useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status]) // Useeffect will run everytime state changes. The function will only run once when it's compoennt is first rendered, we can rerun this function if we want by adding a value in the second parameter. We add that piece of state that changes. 
  // Functions
  const filterHandler = () => {
    switch(status) { //Status is the all, completed, and uncompleted.
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilterTodos(todos);
          break;
    }
  }
   //Save to Local
   const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todo') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }
 
   return (
    <div className="App">
      <header>
        <h1>Ayman's Todo List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setinputText={setinputText}
      setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos}  filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
