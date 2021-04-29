import React, { FC, useRef, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null); // Неуправляемый input

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // if (value !== '') { // Управляемый
        //     console.log(value);
        //     setValue('');
        // }
        console.log(inputRef.current?.value);
        
    };
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => { // onDrag - Начали тянуть блок
        e.preventDefault();
        console.log('DRAG');
        
    };
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => { // onDragOver - Когда находимся внутри блока
        e.preventDefault();
        setIsDrag(true);
    };
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => { // Когда вышли за пределы этого квадрата
        e.preventDefault();
        setIsDrag(false);
    };
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    };
    
    return (
        <div>
            <input  value={value} onChange={changeHandler} placeholder='Управляемый' type='text' />
            <input ref={inputRef} placeholder='Неуправляемый' type='text' />
            <button onClick={clickHandler}>EventExample</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, backgroundColor: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200, height: 200, backgroundColor: isDrag ? 'blue' : 'red', marginTop: '15px'
            }}></div>
        </div>
    );
};

export default EventsExample;