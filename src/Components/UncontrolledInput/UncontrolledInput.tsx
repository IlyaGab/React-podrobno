import React, {useRef, useState} from 'react';

const TrackingValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <> <input onChange={(event => {
                const actualValue = event.currentTarget.value
                setValue(actualValue)
            })}/> -- {value}</>
        </div>
    );
};

export const GetValueOfUncontrolledInputByButtonPress = ()=>{
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el  = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: -- {value} </>
    )
}

export default TrackingValueOfUncontrolledInput;