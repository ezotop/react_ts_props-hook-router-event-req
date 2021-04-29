import React from 'react';

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children?: React.ReactChild | React.ReactNode
}

const Card: React.FC<CardProps> = ({width, height, children}) => {
    return (
        <div style={{width, height, border: '2px solid lightgray'}}>
            {children}
        </div>
    );
};

export default Card;    