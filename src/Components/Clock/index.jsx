import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {};

function formatedDate(date) {
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutes}:${seconds}`
}

function Clock() {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const setTime = setInterval(() => {
            const date = new Date()
            const newTimeString = formatedDate(date)
            setTimeString(newTimeString)
        })

        return () => {
            console.log('1');
            clearInterval(setTime)
        }
    })

    return (
        <p>
           {timeString} 
        </p>
    );
}

export default Clock;