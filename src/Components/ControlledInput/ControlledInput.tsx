import React, {ChangeEvent, useState} from 'react';

const ControlledInput = () => {
    const[parentValue, setPatentValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPatentValue(e.currentTarget.value)
    }

    return (
        <div>
           <> <input value={parentValue} onChange={onChange}/> {parentValue}</>
        </div>
    );
};

export const ControlledCheckbox = () => {
    const[parentValue, setPatentValue] = useState(false)
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPatentValue(e.currentTarget.checked)
    }
    return (
        <div>
            <input type="checkbox" checked={parentValue} onChange={onChange} />
        </div>
    )
}

export const ControlledSelect = () => {
    const[parentValue, setPatentValue] = useState<string | undefined>(undefined)
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setPatentValue(e.currentTarget.value)
    }
    return (

            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
            </select>
    )
}
export default ControlledInput;