export interface TypeTodoProps {
  items: {
    id: number;
    text: string;
  }[];
  onDelete: (todoId: number) => void;
}

export interface TypeTodo {
  id: number;
  text: string;
}

export interface TypeHandleAddTodo {
  onAddTodo: (inputTodo: { id: number; text: string }) => void;
}
