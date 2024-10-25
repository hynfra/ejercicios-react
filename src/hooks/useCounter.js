//use es un estandar para decir que esto es un hook

import { useState } from "react"

// lo mejor es tener la logica fuera de los componente (counbterApp) para facilitar su uso
export const useCounter = ( initialValue  = 10) => {


    const [counter, setCounter] = useState(initialValue);


    const increment = ( value  = 1) => {
        setCounter( counter + value);
    }

    const decrement = ( value  = 1) => {

        if( counter === 0) return;
        setCounter( counter - value);
    }

    const reset = () => {
        setCounter( initialValue );
    }


    //no se puede editar el counter porque viene del useState que es inmutable
    //por eso se especifica en el metodo que envia el useState (este) como editarlo
    return {

        counter, 
        increment,
        decrement,
        reset


    }



}