import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setformState] = useState({

        username: 'strider',
        email: 'fernado@google.com'


    })

    const {username, email} = formState;


// el event en este caso seria el evento que ocurre en el onChange
// entonces de event se puede desestructurar el target y del target se saca los atributos de los input 
//los cuales serian name, value, etc.
    const onInputChange = ({target}) => {

        const {name, value} = target;



        setformState({
            ...formState, // esto permite mantener los cambios y solo hacer el cambio que uno desea
            [ name ]: value
        })
    }

    //permite ver los cambios secundarios
    // se dispara este metodo cada vez que se haga algun cambio en los campos
    // se dispara almenos una vez cuando se carga la pagina
    useEffect(() => {// funcion q recibe una funcion como argumento
       // console.log('UseEffect llamado!')

    }, []);// no se llamara el useEffect si se envia un arreglo vacio en su segundo parametro


    //se debe usar otro useEffect cada vez que se quiera hacer un cambio en un componente
    // en este caso se hara solo cuando se haga un cambio en el form
    useEffect(() => {
        //console.log('UseEffect del form llamado!')

    }, [formState]);

    useEffect(() => {
        //console.log('UseEffect del email!')

    }, [email]);

    
    


  return (
   <>
   
   <h1>Formulario simple</h1>
   <hr />
   
   <input
   type="text"
   className="form-control"
   placeholder="Username"
   name="username"
   value={username}
   onChange={ onInputChange }
   />

<input
   type="email"
   className="form-control"
   placeholder="fernado@google.com"
   name="email"
   value={email}
   onChange={ onInputChange }
   />

    {
       ( username === 'strider2' ) && <Message />
    }

   
   </>
  )
}
