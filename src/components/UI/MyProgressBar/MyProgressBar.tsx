import { useEffect, useState } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type PropType = {
    time: number;
    totalTime: number;
    isStart: boolean;
};

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant='determinate' {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant='body2' color='text.secondary'>{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

function MyProgressBar({ time, totalTime, isStart }: PropType) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (time && totalTime && isStart) {
            const calculatedProgress = 100 - (time / totalTime) * 100;
            const progress = Math.max(0, Math.min(100, Math.floor(calculatedProgress)));
            setProgress(progress);
        }
        if (time === 0) setProgress(0);
    }, [time, totalTime, isStart]);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}

export default MyProgressBar;
