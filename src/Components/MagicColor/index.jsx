import React from 'react';
import './style.scss';
import useMagicColor from '../../hooks/useMagicColor'
function MagicColor() {
    const color = useMagicColor()

    return (
        <div className="magic-color" style={{backgroundColor: color}}>
            
        </div>
    );
}

export default MagicColor;