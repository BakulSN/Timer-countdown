import React from 'react';

type PropType = {
    time: number;
};

const Display: React.FC<PropType> = React.memo(({ time }) => {
    const formattedTime = React.useMemo(() => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor((time % 1000) / 100);

        return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} :
   ${seconds < 10 ? '0' + seconds : seconds} : ${milliseconds}`;
    }, [time]);

    return <div className='display'>{formattedTime}</div>;
});
export default Display;
