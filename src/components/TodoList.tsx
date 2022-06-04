import React from 'react';
import { TypeTodoProps } from '../Types/types';

const TodoList: React.FC<TypeTodoProps> = ({ items, onDelete }) => {
  const handleDelete = (id: number) => {
    onDelete(id);
  };
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} id={`${item.id}`}>
          <span>{item.text}</span>
          <button onClick={handleDelete.bind(null, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
