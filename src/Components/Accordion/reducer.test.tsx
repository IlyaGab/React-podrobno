import {reducer, StateType, TOGGLE_CONST} from './reducer';

test('reducer should change value to opposite', ()=>{

    const state: StateType ={
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_CONST})

    expect(newState.collapsed).toBe(false)
})



test('reducer should throw error', ()=>{

 const state: StateType ={
     collapsed: true
 }

    expect(()=>{
        reducer(state, {type:"FAKETYPE"})
    }).toThrowError();
})