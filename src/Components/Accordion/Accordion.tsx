import React from 'react';


type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    setAccordion: (accordion:boolean)=>void
    items:Array<ItemType>
}

type ItemType ={
    title:string
    value:any
}

export function Accordion(props: AccordionPropsType) {


    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=>{props.setAccordion(!props.accordion)}} />
        {props.accordion && <AccordionBody items={props.items} />}
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

type AccordionBodyPropsType = {
    items:Array<ItemType>
}
function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    const callBack = (value:any)=> {
        console.log(value)
    }
    return <ul>
        {props.items.map((el, index)=><li key={index} onClick={()=>callBack(el.value)}>{el.title}</li>)}
    </ul>
}

