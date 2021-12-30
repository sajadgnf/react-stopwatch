import React from 'react';

const ButtonsComponents = ({ start, stop, reset }) => {
    return (
        <div>
            <button name="start" className="btn" onClick={start}>start</button>
            <button name="stop" className="btn" onClick={stop}>stop</button>
            <button name="reset" className="btn" onClick={reset}>reset</button>
        </div>
    );
};

export default ButtonsComponents;