import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {      

    const { images, isLoading } = useFetchGif( category );

    console.log({ images, isLoading });        

    return (
        <>        
            <h3>{ category }</h3>
            { 
                isLoading && ( 
                    <p className="animate__animated animate__flash">Cargando...</p>
                )
            }            

            <div className="card-grid">
                {
                    // Desestructurando
                    images.map( (image) => (
                        <GifItem key={ image.id }
                            { ...image } />
                    ))                    
                }
            </div>
        </>
    )
}
