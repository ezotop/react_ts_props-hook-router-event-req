import React from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: React.FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div
            onClick={() => onClick(user)}
            style={{padding: '15px', border: '1px solid lightgray'}}
        >
            {user.id}. {user.name} lives in {user.address.city}
        </div>
    );
};

export default UserItem;