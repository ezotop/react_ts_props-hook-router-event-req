import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ITodo } from '../../types/types';
import List from '../List';
import TodoItem from '../TodoItem';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetchTodos()
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('http://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (error) {
            alert(error)
        }
    }


    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem onClick={(todo) => history.push('/todo/' + todo.id)} todo={todo} key={todo.id} />} />
    );
};

export default TodosPage;