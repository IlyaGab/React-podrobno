import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import { UncontroledRaiting} from './Components/Raiting/Raiting';
import OnOff from './Components/OnOff/OnOff';
import UncontrolledAccordion from './Components/Accordion/Accordion';

function App() {
    console.log('App rendering');
    return (
        <div>
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontroledRaiting />
            {/*<Raiting  />*/}
            {/*<Raiting  />*/}
            {/*<Raiting  />*/}
            {/*<Raiting  />*/}
            <OnOff/>
            <OnOff/>
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