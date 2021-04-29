import React from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '15px', border: '1px solid red'}}>
            {user.id}. {user.name} lives in {user.address.city}
        </div>
    );
};

export default UserItem;