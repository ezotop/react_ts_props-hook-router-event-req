import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './component/Card';
import UserList from './component/UserList';
import { IUser } from './types/types';

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers()
    });

    function fetchUsers() {
        try {
            const response = axios('https://jsonplaceholder.typicode.com/users')
                .then(res => setUsers(res))
                .catch(error => console.log('fetching error', error));
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
            <UserList users={users} />
        </div>
    );
};

export default App;