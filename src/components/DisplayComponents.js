import React from 'react';

const DisplayComponents = ({ time }) => {

    const { milliSecond, second, minute, hour } = time

    const h = () => {
        if (hour === 0) {
            return ""
        } else {
            return <span>{hour < 10 ? `0${hour}` : hour}</span> + "& nbsp;:& nbsp;"
        }
    }

    return (
        <div>
            <h3 className="title">STOPWATCH</h3>
            {h()}
            <span className="counter">{minute < 10 ? `0${minute}` : minute}</span>&nbsp;:&nbsp;
            <span className="counter">{second < 10 ? `0${second}` : second}</span>&nbsp;:&nbsp;
            <span className="counter">{milliSecond < 10 ? `0${milliSecond}` : milliSecond}</span>
        </div>
    );
};

export default DisplayComponents;