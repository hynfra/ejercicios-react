import { useCounter } from "../hooks/UseCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

// se usa la API de https://pokeapi.co/
export const MultipleCustomHooks = () => {


  // se llama al counter para asignar el numero del pokemon
  // se obtiene decrement y increment 
  const {counter, decrement, increment } = useCounter(1);


  // se recibe el counter para poner el pokemon
    const {data, hasError, isLoading } = useFetch( `https://pokeapi.co/api/v2/pokemon/${counter}`);

    useFetch();


  return (
    <>
    
      <h1>Informacion de pokemon</h1>
      <hr />
 
 {
 isLoading 
 
 ?  <p><LoadingMessage /> </p>
:   <PokemonCard  
      id={counter} 
      name={data?.name}
      sprites={  [
          data.sprites.front_default, // datos provenientes de la api
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,
        ] }
    />
}
    

      <h2>{ data?.name /** si hay data busca el atributo name */}</h2>

      <button
      className="btn btn-primary mt-2"
      onClick={ () => counter > 1 ? decrement() : null }// evita que se ponga el pokemon con indice 0 porque no existe
      >
        Anterior
      </button>
      <button
      className="btn btn-primary mt-2"
      onClick={() => increment() }
      >

      Siguiente

      </button>
    
    </>
  )
}
