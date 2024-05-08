import React, { useState, useEffect, useCallback } from 'react';
import Display from '../Display/Display';
import ControlButtons from '../UI/MyControlButtons/MyControlButtons';
import Slider from '@mui/material/Slider';
import TimeInputs from '../UI/MyTimeInputs.tsx/MyTimeInputs';
import MyProgressBar from '../UI/MyProgressBar/MyProgressBar';
import { Stimer } from './Stimer.styled';
import soundEnd from '../../assets/sounds/soundEnd.mp3';

const Timer = () => {
    const [isStart, setIsStart] = useState(false);
    const [time, setTime] = useState(0);

    const [minutesValue, setMinutesValue] = useState('');
    const [secondsValue, setSecondsValue] = useState('');
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        let interval: null | NodeJS.Timer;
        if (isStart) {
            interval = setInterval(() => {
                setTime(prev => prev - 100);
            }, 100);
        }
        return function clear() {
            if (interval) clearInterval(interval);
        };
    }, [isStart]);

    useEffect(() => {
        if (time <= 0 && isStart) {
            const audio = new Audio(soundEnd);
            setIsStart(false);
            setMinutesValue('');
            setSecondsValue('');
            setTotalTime(0);
            audio.play();
        }
    }, [isStart, time]);

    const started = useCallback(() => {
        setIsStart(!isStart);
    }, [isStart]);

    const reset = useCallback(() => {
        if (isStart) {
            setIsStart(false);
        } else {
            const audio = new Audio(soundEnd);
            setTime(0);
            setMinutesValue('');
            setSecondsValue('');
            setTotalTime(0);
            audio.play();
        }
    }, [isStart]);

    const handleSlider = useCallback((_: Event, value: number | number[]) => {
        if (typeof value === 'number') {
            setTime(value);
            setTotalTime(value);
            setMinutesValue(`${Math.floor(value / 60000)}`);
            setSecondsValue(`${(value - Math.floor(value / 60000) * 60000) / 1000}`);
        }
    }, []);

    return (
        <Stimer>
            <Display time={time} />
            <MyProgressBar time={time} totalTime={totalTime} isStart={isStart} />
            <TimeInputs
                setTime={setTime}
                setTotalTime={setTotalTime}
                minutesValue={minutesValue}
                setMinutesValue={setMinutesValue}
                secondsValue={secondsValue}
                setSecondsValue={setSecondsValue}
                isDisabled={isStart}
            />

            <Slider value={time} onChange={handleSlider} min={0} max={3600000} step={15000} disabled={isStart} />

            <ControlButtons time={time} isStart={isStart} started={started} reset={reset} />
        </Stimer>
    );
};
export default Timer;
