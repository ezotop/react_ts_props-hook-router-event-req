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
    onClick: () => void
}

const Card: React.FC<CardProps> = ({width, height, variant, children, onClick}) => {
    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid lightgray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
            }}
            onClick={onClick}
            >
                {children}
        </div>
    );
};

export default Card;    