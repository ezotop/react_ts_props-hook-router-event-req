import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{
            padding: '15px',
            border: '2px solid',
            borderColor: todo.completed ? 'green' : 'yellow'
        }}>
            <input type='checkbox' checked={todo.completed} />
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;