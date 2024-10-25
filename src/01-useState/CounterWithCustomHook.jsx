import { useCounter } from "../hooks/UseCounter"


//rafc + tab escribe esto automatico
export const CounterWithCustomHook = () => {

    // se desestructura con {} cuando sabemos que devuelve un objeto
    // si devuelve un arreglo se hace con []

    
    const { counter, increment, decrement, reset } = useCounter();

// al enviar un event, si el metodo desestructurado de arriba recibe 1 parametro, se debe recibir
// con un un metodo de flecha entregando dicho parametro

  return (
   <>
   
   <h1>Counter with hook: {counter}</h1>

   <hr />

    

   <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
   <button className="btn btn-primary" onClick={reset}>reset</button> 
   <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>

   
   </>
  )
}
