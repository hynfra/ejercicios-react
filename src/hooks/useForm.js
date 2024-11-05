import {  useState } from "react";

export const useForm = ( initialForm = {} ) => {
 
    // con esto hace que el formState sea igual a lo que sea que se envie por argumento
    const [formState, setformState] = useState( initialForm )

    


// el event en este caso seria el evento que ocurre en el onChange
// entonces de event se puede desestructurar el target y del target se saca los atributos de los input 
//los cuales serian name, value, etc.
    const onInputChange = ( { target } ) => {

        //se necesita saber que input cambio y el valor de dicho input
        const {name, value} = target;



        setformState({
            ...formState, // esto permite mantener los cambios y solo hacer el cambio que uno desea
            [ name ]: value
        })
    }

    //establece que el boton resetee los input
    const onResetForm = () => {   

        setformState( initialForm ); // se usa el initialForm que no tiene nada

    }


    // es mejor devolver un objeto por si es necesario expandirlo mas tarde
    return {
        ...formState,// se aplica este paso para ahorrarse la desestructuracion de formState en la otra clase
        formState,
        onInputChange,
        onResetForm

    }
}
