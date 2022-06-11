import React, {useEffect, useState} from 'react';

type PropsType = {

}

const getTwoDigitsString = (num:number) => num < 10 ? '0' + num : num


const Clock:React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intevalId =  setInterval(()=> {
            console.log('Tick')
            setDate(new Date())
        }, 1000)
        return () => {
         clearInterval(intevalId)
        }
    },[])

    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;