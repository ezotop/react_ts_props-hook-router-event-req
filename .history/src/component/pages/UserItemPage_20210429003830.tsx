import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../types/types';
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
    id: string
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>(); // Хук получает параметры из адресной строки
    const history = useHistory();

    

    useEffect(() => {
        fetchUser()
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>User page {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address}</div>
        </div>
    );
};

export default UserItemPage;