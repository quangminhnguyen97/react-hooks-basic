import React, {useState} from 'react';
import './ColorBox.scss';

function getRandomColor() {
    const LIST_COLOR = ['red', 'green', 'blue', 'orange', 'deeppink'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return LIST_COLOR[randomIndex]
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor)
        localStorage.setItem('box_color', newColor)
    }

    return (
        <div className="ColorBox"
            style={{backgroundColor: color}}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;