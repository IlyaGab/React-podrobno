import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import { UncontroledRaiting} from './Components/Raiting/UncontrolledRaiting';
import OnOff from './Components/OnOff/OnOff';
import {Raiting, RaitingValueType} from './Components/Raiting/Raiting';
import {UncontrolledOnOff} from './Components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './Components/Accordion/UncontrolledAccordion';



function App() {
    console.log('App rendering');

    let [raitingValue, setRaitingValue]= useState<RaitingValueType>(1 )
    let [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(false)
    let [on, setOn] = useState(true)
    return (
        <div>
            <UncontrolledAccordion titleValue={"Menu"} />
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}
            <Accordion titleValue={"Menu"} accordion={accordionCollapsed} setAccordion={setAccordionCollapsed}/>
            <UncontroledRaiting />
            <Raiting value={raitingValue} onClick={setRaitingValue} />
            {/*<Raiting  />*/}
            {/*<Raiting  />*/}
            {/*<Raiting  />*/}
            <UncontrolledOnOff setOn={setOn}/> {on.toString()}
            {/*<OnOff on={on} setOn={setOn}/>*/}

            {/*<OnOff on={false}/>*/}
        </div>
    );
}
type PageTitlePropsType = {
    title: string;
}
function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendered');
    return <h1>{props.title}</h1>
}


export default App;