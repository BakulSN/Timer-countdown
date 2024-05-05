import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type PropType = {
    isStart: boolean;
    started: () => void;
    reset: () => void;
    time?: number;

};

const ControlButtons: React.FC<PropType> = React.memo(({ isStart, started, reset, time }) => {
    
    return (
        <Stack  direction="row" spacing={2}>
            <Button onClick={started} disabled={time === 0} variant="contained" color="success">
                {' '}
                {!isStart ? 'Start' : 'Pause'}{' '}
            </Button>
            <Button onClick={reset} disabled={time === 0} variant="contained" color="error">
                Reset
            </Button>
        </Stack>
    );
})

export default ControlButtons;
