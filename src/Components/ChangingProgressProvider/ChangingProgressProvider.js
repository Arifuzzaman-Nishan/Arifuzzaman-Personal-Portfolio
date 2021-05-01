import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ChangingProgressProvider = () => {
    const values = [0,20,40,60];

    const [valueIndex, setValueIndex] = useState(0);

    useEffect(() => {

            values.map(value => setValueIndex(value));
        

    }, [values])

    console.log(valueIndex);
    return (
        <div>
            <CircularProgressbar value={valueIndex} text={`${valueIndex}%`} />
        </div>
    );
};

export default ChangingProgressProvider;