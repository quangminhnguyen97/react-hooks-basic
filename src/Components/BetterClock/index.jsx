import React from 'react';
import useClock from '../../hooks/useClock'
import './style.scss';


function Clock() {
    const { timeString } = useClock()

    return (
        <div className="betterClock">
            <p className="betterClock-content">{timeString}</p>
        </div>
    );
}

export default Clock;