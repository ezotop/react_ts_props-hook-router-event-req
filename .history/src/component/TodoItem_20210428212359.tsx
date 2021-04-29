import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{
            border: '1px solid',
            borderColor: todo.completed ? 'green' : 'hotpink'
        }}>
            {todo.userId}
        </div>
    );
};

export default TodoItem;