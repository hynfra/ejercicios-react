import { useRef } from "react";


export const FocusScreen = () => {

    // useRef sirve para matener una referencia, y si esa cambia no renderizar el componente denuevo
    const inputRef = useRef();

    

    const onClick = () => {
        console.log(inputRef);
       inputRef.current.select();


    }





  return (
    <>
    
            <h1>Focus Screen</h1>
            <hr/>

            <input
               ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />


            <button className="btn btn-primary mt-2"
                    onClick={ onClick }    
            
            >

                    Set focus


            </button>


    
    
    </>
  )
}
