import { useCallback } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type PropType = {
    setTime: React.Dispatch<React.SetStateAction<number>>;
    minutesValue: string;
    setMinutesValue: React.Dispatch<React.SetStateAction<string>>;
    secondsValue: string;
    setSecondsValue: React.Dispatch<React.SetStateAction<string>>;
    isDisabled: boolean;
};

function TimeInputs({ setTime, minutesValue, setMinutesValue, secondsValue, setSecondsValue, isDisabled }: PropType) {
    const handleMinutes = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            if (+inputValue <= 720) {
                setMinutesValue(inputValue);
                setTime(+inputValue * 60000 + +secondsValue * 1000);
            }
        },
        [secondsValue, setMinutesValue, setTime]
    );

    const handleSeconds = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            if (+inputValue <= 43200) {
                setSecondsValue(inputValue);
                setTime(+inputValue * 1000 + +minutesValue * 60000);
            }
        },
        [minutesValue, setSecondsValue, setTime]
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
