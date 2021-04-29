import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ITodo } from '../../types/types';

interface TodoItemPageParams {
    id: string
}

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodoItemPageParams>();
    const history = useHistory();

    useEffect(() => {
        fetchTodos()
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo>('http://jsonplaceholder.typicode.com/todos/' + params.id)
            setTodo(response.data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/todos?_limit=10')}>Back</button>
            <h1>Todo page</h1>
            <div>Going to do {todo?.id}: {todo?.title}</div>
        </div>
    );
};

export default TodoItemPage;