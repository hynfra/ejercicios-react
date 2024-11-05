import { useEffect } from "react"
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {

    // se extrae ademas los campos de formState
    const {formState, onInputChange, username, email, password, onResetForm} = useForm({

        username: '',
        email: '',
        password:''


    })

    //const { username, email, password} = formState;

   /* */

    //permite ver los cambios secundarios
    // se dispara este metodo cada vez que se haga algun cambio en los campos
    // se dispara almenos una vez cuando se carga la pagina
    useEffect(() => {// funcion q recibe una funcion como argumento
       // console.log('UseEffect llamado!')

    }, []);// no se llamara el useEffect mas de una vez si se envia un arreglo vacio en su segundo parametro


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
   
   <h1>Formulario con custom hook</h1>
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

<input
   type="password"
   className="form-control mt-2"
   placeholder="Contraseña"
   name="password"
   value={ password }
   onChange={ onInputChange }
   />

<button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
 

   
   </>
  )
}
