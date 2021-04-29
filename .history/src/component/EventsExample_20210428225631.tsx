import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (value !== '') {
            console.log(value);
            setValue('');
        }
    };
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
        
    };

    return (
        <div>
            <input type='text' value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>EventExample</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, backgroundColor: 'red'}}></div>
            <div style={{width: 200, height: 200, backgroundColor: 'red', marginTop: '15px'}}></div>
        </div>
    );
};

export default EventsExample;