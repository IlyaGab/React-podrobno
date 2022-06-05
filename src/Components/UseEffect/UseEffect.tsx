import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState<number>(1)
    console.log('Example')

    // useEffect(()=> {
    //     console.log('useEffect')
    //     document.title = counter.toString()
    // },[counter])

    // useEffect(()=> {
    //     console.log('useEffect1')
    //     document.title = counter.toString()
    // },[])
    //
    // useEffect(()=> {
    //     console.log('useEffect2')
    //     document.title = counter.toString()
    // })

    return (
        <div>
        {/*Hello, {counter} {fake}*/}
        {/*    <button onClick={()=>setFake(fake+ 1)}> count </button>*/}
        </div>
    );
};

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState<number>(1)
    console.log('Example')

    useEffect(()=> {

        setInterval(()=>{
            setCounter(state => state + 1)
        }, 3000)
    },[])



    return (
        <div>
            Hello, {counter} {fake}
            {/*<button onClick={()=>setFake(fake + 1)}> count </button>*/}
        </div>
    );
};


export const TimeExample = () => {

    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let time = h + ':' + m + ':' + s

    const [t, setTime] = useState(s)
    useEffect(()=> {
        setInterval(()=>{
            setTime(state=> state + 1)
        }, 1000)
    },[])



    return (
        <div>
            {time}
        </div>
    );
};
export default UseEffect;