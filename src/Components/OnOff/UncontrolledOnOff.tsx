import React, {useState} from 'react';

type PropsType = {
    setOn:(on:boolean)=>void
}



export function UncontrolledOnOff(props:PropsType) {



    let [on, setOn] = useState(false)

    const onStyle = {
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display: "inline",
        padding: "2px",
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display: "inline",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor:on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.setOn(true)
    }

    const offClicked = () =>{
        setOn(false)
        props.setOn(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}>On</div>
        <div style={offStyle} onClick={offClicked}>Off</div>
        <div style={indicatorStyle} ></div>
    </div>
}
