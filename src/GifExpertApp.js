import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    //const categories = ['OnePunch', 'Dragon Ball', 'Samurai X'];
    const [categories, setCategories] = useState( ['OnePunch']);

    const handleAdd = () =>{
        //setCategories(categories.concat('HunterXHunter'));
        //setCategories([...categories, 'HunterXHunter']);
        setCategories( cats => [...cats, 'HunterXHunter']);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category =>{
                        return <GifGrid key={category} category={category}/>
                    })
                }
            </ol>
        </>
    )

}

export default GifExpertApp;