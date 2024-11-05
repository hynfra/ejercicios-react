import { useEffect, useState } from "react"




const localCache = {};







export const useFetch = ( url ) => {

    const [state, setstate] = useState({
// crea un objeto dentro del useState
        data:null,
        isLoading: true,
        hasError: false,
        error:null,


    });


    useEffect( () => {

        getFetch();



    }, [url] );

    const setLoadingState = () => {
      setstate({

        data:null,
        isLoading: true,
        hasError: false,
        error:null,



      });
    }


    const getFetch = async() => {


      if(  localCache[url]  ){
        console.log('usando cache');
        setstate({

            data:localCache[url],
            isLoading:false,
            hasError:false,
            error:null
        });
        return;
      }


      setLoadingState();

       const resp = await fetch( url);

       await new Promise( resolve => setTimeout(resolve, 1500 ) );

       if( !resp.ok ){
        setstate({

          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: resp.status,
            message: resp.statusText,
          }



          
        });
        return;
       }


       const data = await resp.json();

       setstate({
        data:data,
        isLoading:false,
        hasError:false,
        error:null
       })
       // se extrae la data de la consulta de API
       console.log ({data});

       // almacena los datos de la url en el cache
       localCache[url] = data;
    }

   



  return {

    // crea un objeto y establece que el atributo data sea del state de arriba
    data:state.data,
    isLoading: state.isLoading,
    hasError: state.hasError


  }
}
