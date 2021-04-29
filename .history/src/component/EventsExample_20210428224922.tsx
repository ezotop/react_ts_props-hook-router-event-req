import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    };

    return (
        <div>
            <input type='text' value={value} onChange={changeHandler} />
            <button onClick={clickHandler}></button>
        </div>
    );
};

export default EventsExample;