import React, { useState, useEffect, useRef, useCallback} from 'react';
import ControlButtons from '../UI/MyControlButtons/MyControlButtons';
import Display from '../Display/Display';
import { Sstopwatch } from './Stopwatch.styled';

const Stopwatch = React.memo(() => {
    const [isStart, setIsStart] = useState(false);
    const [time, setTime] = useState(0);
    const timerRef = useRef<null | NodeJS.Timer>(null);

    useEffect(() => {
        if (isStart) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 100);
            }, 100);
        }

        return function clear() {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isStart]);

    const started = useCallback(() => {
        setIsStart((prevIsStart) => !prevIsStart);
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
