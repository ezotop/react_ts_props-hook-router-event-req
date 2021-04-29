import React from 'react';

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children?: React.ReactChild | React.ReactNode
}

const Card = ({width, height, children}: CardProps) => {
    return (
        <div style={{width, height, background: 'lightgray'}}>
            {children}
        </div>
    );
};

export default Card;    