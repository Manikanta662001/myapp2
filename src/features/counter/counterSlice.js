import {createSlice} from '@reduxjs/toolkit'

const initialstate={value: 0}

const counterSlice=createSlice({
    name:'counter',
    initialState:initialstate,
    reducers:{
        increment : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            state.value-=1
        },
        reset :(state)=>{
               state.value-=state.value
        },
        incrementNum :(state,action)=>{
            state.value+=action.payload
        }

    }
})
export default counterSlice.reducer
export const {increment,decrement,incrementNum,reset} =counterSlice.actions