import React, { FormEvent, useRef } from 'react';
import { TypeHandleAddTodo } from '../Types/types';

const TodoInput: React.FC<TypeHandleAddTodo> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let todoText = inputRef.current!.value;
    if (todoText.trim() === '') return;
    props.onAddTodo({
      id: new Date().getTime(),
      text: todoText,
    });
    inputRef.current!.value = '';
  };
  return (
    <div>
      <form className="form-control" onSubmit={handleSubmit}>
        <label htmlFor="input-text"></label>
        <input ref={inputRef} type="text" id="input-text" />
        <button className="form-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
