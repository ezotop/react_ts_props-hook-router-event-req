import React, { FC } from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode; // Компонент, который необходимо отрисовать (UserItem например)
}

export default function List<T>({items, renderItem}: ListProps<T>) {
    return (
        <div>
            {
                items.map(renderItem)
            }
        </div>
    );
};