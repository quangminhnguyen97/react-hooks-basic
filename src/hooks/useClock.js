import { useEffect, useState } from 'react';

function formatedDate(date) {
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutes}:${seconds}`
}

function useClock() {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const setTime = setInterval(() => {
            const date = new Date()
            const newTimeString = formatedDate(date)
            setTimeString(newTimeString)
        })

        return () => {
            clearInterval(setTime)
        }
    })
    return {timeString}
}

export default useClock;