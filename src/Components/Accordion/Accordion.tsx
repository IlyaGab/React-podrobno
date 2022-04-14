import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {


    let [collapsed, setCollapsed] = useState(true)

    let collapseToggle = () => {collapsed ? setCollapsed(false) : setCollapsed(true)}

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={collapseToggle}>Toggle</button>
        {collapsed && <AccordionBody/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle renderng');
    return <h3>--{props.title}--</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering');

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default UncontrolledAccordion;