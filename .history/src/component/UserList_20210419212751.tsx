import React from 'react';
import { IUser } from '../types/types';

interface UserListProps {
    users: IUser[]
}

const UserList: React.FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.id} style={{padding: '15px', border: '1px solid red'}}>
                        {user.id}. {user.name} lives in {user.address.city}
                    </div>
                )
            })}            
        </div>
    );
};

export default UserList;