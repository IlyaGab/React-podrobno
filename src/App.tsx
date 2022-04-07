import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Raiting} from "./Components/Raiting/Raiting";

function App() {
    console.log('App rendering');
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Raiting value={1} />
            <Raiting value={2} />
            <Raiting value={3} />
            <Raiting value={4} />
            <Raiting value={5} />
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