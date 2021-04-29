import React from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: React.FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div style={{padding: '15px', border: '1px solid lightgray'}} onClick={() => onClick(user)}>
            {user.id}. {user.name} lives in {user.address.city}
        </div>
    );
};

export default UserItem;