import React, {useState} from 'react';




export function UncontroledRaiting() {

    let [star, setStar] = useState(1)


    return <div>
        <Star selected={star > 0} setStar={() => {
            setStar(1)
        }}/>
        <Star selected={star > 1} setStar={() => {
            setStar(2)
        }}/>
        <Star selected={star > 2} setStar={() => {
            setStar(3)
        }}/>
        <Star selected={star > 3} setStar={() => {
            setStar(4)
        }}/>
        <Star selected={star > 4} setStar={() => {
            setStar(5)
        }}/>

    </div>

}

type StarPropsType = {
    selected: boolean;
    setStar: ()=>void

}

function Star(props: StarPropsType) {

    return <span onClick={()=>{props.setStar()}}>
        {props.selected ? <b>star</b> :'star'}
    </span>
}