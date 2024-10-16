'use client'
import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timeoutId = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timeoutId);
    }, [onTimeout, timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);

       return () => clearInterval(interval);
    }, [])

    return <progress className={mode} max={timeout} value={remainingTime} id="question-time"/>;
}