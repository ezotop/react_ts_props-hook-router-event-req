import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './component/Card';
import List from './component/List';
import UserItem from './component/UserItem';
import UserList from './component/UserList';
import { IUser } from './types/types';

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers()
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
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
            {/* <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} /> */}
        </div>
    );
};

export default App;