import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {UncontroledRaiting} from './Components/Raiting/UncontrolledRaiting';
import {Raiting, RaitingValueType} from './Components/Raiting/Raiting';
import {UncontrolledOnOff} from './Components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './Components/Accordion/UncontrolledAccordion';
import {GetValueOfUncontrolledInputByButtonPress} from './Components/UncontrolledInput/UncontrolledInput';
import TrackingValueOfUncontrolledInput from './Components/UncontrolledInput/UncontrolledInput';
import ControlledInput, {ControlledCheckbox, ControlledSelect} from './Components/ControlledInput/ControlledInput';
import Select from './Components/Select/Select';
import ReactMemo from './Components/ReactMemo/ReactMemo';
import UseMemo from './Components/UseMemo/UseMemo';
import Factorial from './Components/Factorial/Factorial';
import UseCallback from './Components/useCallback/UseCallback';
import UseState from './Components/UseState/UseState';



let array = [{title:'Ilya', value:'1'}, {title:'Alena', value:'2'},{title: 'Dimych', value:'3'}]

function App() {


    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(1)
    let [select, setSelect]= useState('3')
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(true)


    return (
        <div>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Menu'} accordion={accordionCollapsed} setAccordion={setAccordionCollapsed} items={array} />
            <UncontroledRaiting/>
            <Raiting value={raitingValue} onClick={setRaitingValue}/>
            <UncontrolledOnOff setOn={setOn}/> {on.toString()}
            <TrackingValueOfUncontrolledInput/>
            <GetValueOfUncontrolledInputByButtonPress/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <Select value={select} onChange={setSelect} items={array}/>
            <ReactMemo/>
            <Factorial />
            <UseMemo />
            <UseCallback />
            <UseState/>
        </div>
    );
}





export default App;