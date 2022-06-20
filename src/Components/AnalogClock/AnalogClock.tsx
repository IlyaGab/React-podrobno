import React, {useEffect, useState} from 'react';
import styles from './AnalogClock.module.css';

const AnalogClock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intevalId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intevalId)
        }
    }, [])

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return (
        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
            </div>
        </div>
    );
}

            export default AnalogClock;