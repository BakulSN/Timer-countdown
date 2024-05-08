import React from 'react';

type PropType = {
    time: number;
};

const Display: React.FC<PropType> = React.memo(({ time }) => {
    const getTime = (unit: number) => {
        return `${unit < 10 ? '0' + unit : unit}`;
    };

    const formattedTime = React.useMemo(() => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor((time % 1000) / 100);

        return `${getTime(hours)} : ${getTime(minutes)} :
    ${getTime(seconds)} : ${milliseconds}`;
    }, [time]);

    return <div>{formattedTime}</div>;
});
export default Display;
