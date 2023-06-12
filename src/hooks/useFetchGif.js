import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = ( category ) => {


    const [images, setImages] = useState([]); 
    const [isLoading, setIsLoading] = useState( true );

    const getImages =  async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading( false );
    }

    // //En el primer parametro del useEffect le paso que se va ejectuar, que efecto se produce en x momento...
    // //En el segundo parametro le paso las dependencias, o sea los x momentos cuando se ejecutará el efecto...
    // //Si el segundo parametro va un array vacio [], esto se ejecuta solo la primera vez.
    useEffect( () => {
        getImages();
    }, []);


    return {
        images,
        isLoading
    }

    //Esto es como hacer un return:
    // return {
    //     images: images,
    //     isLoading: isLoading
    // }
}
