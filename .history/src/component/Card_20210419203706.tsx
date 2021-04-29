import React from 'react';

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children: Element
}

const Card = ({width, height}: CardProps) => {
    return (
        <div style={{width, height, background: 'lightgray'}}>
            
        </div>
    );
};

export default Card;    