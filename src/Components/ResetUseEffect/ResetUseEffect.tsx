import React, {useEffect, useState} from 'react';

const ResetUseEffect = () => {

    const [count, setCount] = useState(1)

    console.log('Compnent rendered' + ' ' + count)

    useEffect(()=>{
        console.log('Effect occured' + ' ' + count)

        return ()=> {
            console.log('RESET EFFECT' + ' ' + count)
        }
    }, [count])

    const increase = () => setCount(count + 1)

    return (
        <div>
            Hello, counter: {count} <button onClick={increase}>Count</button>
        </div>
    );
};

export default ResetUseEffect;