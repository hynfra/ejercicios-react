import { useEffect, useState } from "react"


export const Message = () => {


    const [coords, setCoords] = useState({x:0,y:0})



    //un componente se puede usar cuando se construye y se destruye (return)
    useEffect(() => {
      
        const onMouseMove = ( {x,y} ) => {
           // const coords = {x, y};
           setCoords({x,y});
        }


        // escucha el movimiento del raton, el segundo parametro lo que quiero hacer cuando esto ocurra
        // en este caso uso el metodo de arriba
        window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        // esto no funciona si hace la funcion directamente desde el addEventListener
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    



  return (
   <>
      
      <h3>Usuario ya existe</h3>

      { JSON.stringify( coords ) }
    
   
   </>
  )
}
