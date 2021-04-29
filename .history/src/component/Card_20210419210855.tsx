import React, { useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string // ? - если хотим сделать не обязательным
    height?: string
    children?: React.ReactChild | React.ReactNode
    variant: CardVariant
    onClick: (num: number) => void
}

const Card: React.FC<CardProps> = ({width, height, variant, children, onClick}) => {

    const [state, setState] = useState(0);

    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid lightgray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
            }}
            onClick={() => onClick(1)}
            >
                {children}
        </div>
    );
};

export default Card;    