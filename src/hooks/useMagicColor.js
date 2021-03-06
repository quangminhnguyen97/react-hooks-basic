import { useState, useRef, useEffect } from 'react'


function randomColor(currentColor) {
    const COLOR_LIST = ['green', 'red', 'yellow']
    const currentIndex = COLOR_LIST.indexOf(currentColor)
    let newIndex = currentIndex
    while ( currentIndex === newIndex ) {
        newIndex = Math.trunc(Math.random() * 3)
    }
    return COLOR_LIST[newIndex]
}

function useMagicColor() {
    const [color, setColor] = useState('transparent')
    const colorRef = useRef('transparent')
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor)
            colorRef.current = newColor
        }, 1000)
        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor;