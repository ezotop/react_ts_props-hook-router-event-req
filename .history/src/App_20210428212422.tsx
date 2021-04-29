import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './component/Card';
import List from './component/List';
import TodoItem from './component/TodoItem';
import UserItem from './component/UserItem';
import UserList from './component/UserList';
import { ITodo, IUser } from './types/types';

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (error) {
            alert(error)
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('http://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (error) {
            alert(error)
        }
    }
    
    
    return (
        <div>
            <Card
                onClick={(num) => console.log('Click', num)}
                variant={CardVariant.primary}
                width={'200px'}
                height={'200px'}
                >
                    <button>Button</button>
                    <div>Hello world!</div>
            </Card>
            {/* <UserList users={users} /> */}
            <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
        </div>
    );
};

export default App;