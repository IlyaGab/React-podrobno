import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState<number>(1)
    console.log('Example')

    useEffect(()=> {
        debugger
        console.log('useEffect')
        document.title = counter.toString()
    },[counter])

    return (
        <div>
        Hello, {counter} {fake}
            <button onClick={()=>setFake(fake+ 1)}> count </button>
        </div>
    );
};

export default UseEffect;