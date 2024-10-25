import { useState } from "react"


export const CounterApp = () => {

    const [state, setCounter ]= useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,
    })

// se debe desestructurar fuera del usestate
    const {counter1,counter2, counter3} = state;



  return (
   <>
   
   
   <h1>Counter1: { counter1}</h1>
   <h1>Counter2: { counter2}</h1>
   <h1>Counter3: { counter3}</h1>
   <hr />

   <button class="btn btn-primary" onClick={() => setCounter({
    ...state, // llama a todos los counter del state
   counter1: counter1 +1 // añade al counter1 un valor
   })

    }>+1</button>

   
   </>
  )
}
