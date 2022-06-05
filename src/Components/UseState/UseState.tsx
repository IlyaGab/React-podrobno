import React, {useState} from 'react';


function generateData (){
    console.log("generateData")
    return 1
}

const UseState = () => {
    console.log('UseState')

    const [counter, setCounter] = useState<number>(generateData)

    return (
        <div>
            <button onClick={()=>setCounter(state => state + 1)}> count </button>
            {counter}
        </div>
    );
};

export default UseState;