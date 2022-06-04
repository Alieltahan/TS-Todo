import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { TypeTodo } from './Types/types';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const handleAddTodo = (todo: TypeTodo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const handleDelete = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList onDelete={handleDelete} items={todos} />
    </div>
  );
};

export default App;
