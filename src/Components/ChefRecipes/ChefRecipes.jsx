import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import { useParams } from 'react-router-dom';
import Recipes from './Recipes';

function ChefRecipes(props) {
    const parameter = useParams();
    const id = parameter.id;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-aniqa4.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    const recipes = data.find(x => x.id == id)

    return (
        <div>
            <Banner recipes={recipes}></Banner>
            <Recipes recipes={recipes}></Recipes>
        </div>
    )
}

export default ChefRecipes;