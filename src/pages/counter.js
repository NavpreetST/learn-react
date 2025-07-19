
import { useState } from "react"
import { useCounter } from "./counterHook"
export const Counter = () =>{
    const {count, increase, decrease, restart} = useCounter(234)
    
    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={restart}>Set 0</button>
            <h1> {count}</h1>
        </div>
    )
}