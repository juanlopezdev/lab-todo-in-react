import React from 'react';
import { TodoProvider  } from '../TodoContext';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tarea 2', completed: false},
//   {text: 'Tarea 3', completed: false}
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
