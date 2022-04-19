import React from 'react';

type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    setAccordion: (accordion:boolean)=>void
}

export function Accordion(props: AccordionPropsType) {


    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=>{props.setAccordion(!props.accordion)}} />
        {props.accordion && <AccordionBody/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle renderng');
    return <h3 onClick={props.onClick}>--{props.title}--</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering');

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

