import React from 'react';

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children?: React.ReactChild | React.ReactNode
}

const Card = ({width, height, children}: CardProps) => {
    return (
        <div style={{width, height, border: '1px solid lightgray'}}>
            {children}
        </div>
    );
};

export default Card;    