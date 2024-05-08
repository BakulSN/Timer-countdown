import React, { useState, useEffect, useCallback } from 'react';
import ControlButtons from '../UI/MyControlButtons/MyControlButtons';
import Display from '../Display/Display';
import { Sstopwatch } from './Stopwatch.styled';

const Stopwatch = React.memo(() => {
    const [isStart, setIsStart] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval: null | NodeJS.Timer;
        if (isStart) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 100);
            }, 100);
        }

        return function clear() {
            if (interval) clearInterval(interval);
        };
    }, [isStart]);

    const started = useCallback(() => {
        setIsStart(prevIsStart => !prevIsStart);
    }, []);

    const reset = useCallback(() => {
        if (isStart) {
            setIsStart(false);
        } else {
            setTime(0);
        }
    }, [isStart]);

    return (
        <Sstopwatch>
            <Display time={time} />
            <ControlButtons isStart={isStart} started={started} reset={reset} />
        </Sstopwatch>
    );
});

export default Stopwatch;
