import { useCallback } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type PropType = {
    setTime: (value: number) => void;
    minutesValue: string;
    setMinutesValue: (value: string) => void;
    secondsValue: string;
    setSecondsValue: (value: string) => void;
    isDisabled: boolean;
    setTotalTime: (value: number) => void;
};

function TimeInputs({
    setTime,
    minutesValue,
    setMinutesValue,
    secondsValue,
    setSecondsValue,
    isDisabled,
    setTotalTime,
}: PropType) {
    const handleMinutes = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            if (+inputValue <= 719) {
                setMinutesValue(inputValue);
                const total = +inputValue * 60000 + +secondsValue * 1000;
                setTime(total);
                setTotalTime(total);
            }
        },
        [secondsValue, setMinutesValue, setTime, setTotalTime]
    );

    const handleSeconds = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            if (+inputValue <= 60) {
                setSecondsValue(inputValue);
                const total = +inputValue * 1000 + +minutesValue * 60000;
                setTime(total);
                setTotalTime(total);
            }
        },
        [minutesValue, setSecondsValue, setTime, setTotalTime]
    );

    return (
        <Box
            component='form'
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
        >
            <TextField
                type='string'
                value={minutesValue}
                onChange={handleMinutes}
                disabled={isDisabled}
                id='outlined-basic1'
                label='Minutes'
                variant='outlined'
            />
            <TextField
                type='string'
                value={secondsValue}
                onChange={handleSeconds}
                disabled={isDisabled}
                id='outlined-basic2'
                label='Seconds'
                variant='outlined'
            />
        </Box>
    );
}

export default TimeInputs;
