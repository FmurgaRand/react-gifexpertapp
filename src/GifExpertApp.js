import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Jujutsu Kaisen', 'Hentai']
    const [categories, setCategories] = useState(['Attack on Titan']);
    // const handleAdd = () =>{
    //     //Agrega un elemento al ultimo de la lista con el spread(...)
    //     // setCategories( [...categories, 'Attack on Titan']);
    //     //Agrega un elemento al inicio de la lista con el spread(...)
    //     // setCategories( ['Attack on Titan', ...categories]);

    //     //Otra forma de hacerlo es mediante un callback
    //     setCategories(cats => [...cats, 'Attack On Titan'])
    // }


    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map(category => 
                        (
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                        )
                    )
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp;