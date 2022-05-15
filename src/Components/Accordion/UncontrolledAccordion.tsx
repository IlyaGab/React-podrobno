import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONST} from './reducer';

type AccordionPropsType = {
    titleValue: string,
}

export type ActionType = {
    type: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})


    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={()=>{dispatch(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_CONST})
        }}/>

        {!state.collapsed && <AccordionBody/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle renderng');
    return <h3 onClick={() => props.onClick()}>--{props.title}--</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering');

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
