import React from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children?: React.ReactChild | React.ReactNode
    variant: 
}

const Card: React.FC<CardProps> = ({width, height, children}) => {
    return (
        <div style={{width, height, border: '2px solid lightgray'}}>
            {children}
        </div>
    );
};

export default Card;    