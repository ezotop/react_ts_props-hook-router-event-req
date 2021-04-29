import React, { FC } from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode; // Компонент, который необходимо отрисовать (UserItem например)
}

const List: FC<ListProps> = (items, renderItem) => {
    return (
        <div>
            
        </div>
    );
};

export default List;