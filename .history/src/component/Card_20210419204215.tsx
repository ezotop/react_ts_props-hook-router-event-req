import React from 'react';

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children?: React.ReactChild | React.ReactNode
}

const Card = ({width, height}: CardProps) => {
    return (
        <div style={{width, height, background: 'lightgray'}}>
            
        </div>
    );
};

export default Card;    