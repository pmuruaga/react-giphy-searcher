import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball']);    

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        console.log('NewCategory recibida: ' + newCategory);
        setCategories( [ newCategory, ...categories ] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        {/* Le paso el evento, no necesito llamarlo evento puedo ponerle value */}
        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) }
        />
        
        { 
            categories.map( (category) => {                                                                    
                return (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />                
                );                
            })
        }
        
    </>
  )
}
