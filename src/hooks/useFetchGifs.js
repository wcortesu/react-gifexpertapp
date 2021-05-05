import { useEffect, useState } from "react"
import { getGifs } from "../herlpers/getGifs";


export const useFetchGifs = (category)=>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /***
     * Determinar qué se ejecuta una vez se renderiza el componente
     */
    useEffect(() => {
        getGifs(category)
        .then(imgs =>{
            //Para probar loading
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 1000);
        });
    }, [category]);  //Si la categoria cambia se vuelve a disparar el useEffect

    return state; // {data:[], loading: true}
}