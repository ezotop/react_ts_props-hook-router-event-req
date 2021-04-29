import React from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children?: React.ReactChild | React.ReactNode
    variant: CardVariant
}

const Card: React.FC<CardProps> = ({width, height, children}) => {
    return (
        <div style={{width, height, border: CardVariant.outlined ? '1px solid lightgray' : 'none'}}>
            {children}
        </div>
    );
};

export default Card;    