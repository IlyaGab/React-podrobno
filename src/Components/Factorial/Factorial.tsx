import React, {useMemo, useState} from 'react';

const Factorial = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(6)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a : {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    );
};



export default Factorial;