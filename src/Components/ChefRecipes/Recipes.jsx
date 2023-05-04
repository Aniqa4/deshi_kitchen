import React, { useState } from 'react'

function Recipes({ recipes }) {
    const [favoriteClicked, setFavoriteClicked] = useState(false);
    const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);

    if (!recipes) {
        // Render a loading state or return null if the recipes prop is not available yet
        return <div className="radial-progress text-center" style={{"--value":70}}>70%</div>;
    }
    
    const handleFavoriteButton=()=>{
     console.log('clicked');
        setFavoriteClicked(true);
        setIsFavoriteAdded(true);
    }

    const recipe = recipes.recipes;

    return (
        <div>
            <h1 className=' text-center text-3xl font-semibold'>Recipes</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    recipe.map((x, index) =>
                        <div key={index} className=' text-gray-700 border rounded p-5 my-5'>
                            <h1 className=' text-black font-semibold'>Recipe Name : {x.recipe_name}</h1>
                            <ul className='pb-5'>
                                <li className=' text-black font-semibold '>Ingredients:</li>
                                <li>{x.ingredients[0] ? x.ingredients[0] : ''}</li>
                                <li>{x.ingredients[1] ? x.ingredients[1] : ''}</li>
                                <li>{x.ingredients[2] ? x.ingredients[2] : ''}</li>
                                <li>{x.ingredients[3] ? x.ingredients[3] : ''}</li>
                                <li>{x.ingredients[4] ? x.ingredients[4] : ''}</li>
                                <li>{x.ingredients[5] ? x.ingredients[5] : ''}</li>
                                <li>{x.ingredients[6] ? x.ingredients[6] : ''}</li>
                                <li>{x.ingredients[7] ? x.ingredients[7] : ''}</li>
                                <li>{x.ingredients[8] ? x.ingredients[8] : ''}</li>
                                <li>{x.ingredients[9] ? x.ingredients[9] : ''}</li>
                                <li>{x.ingredients[10] ? x.ingredients[10] : ''}</li>
                                <li>{x.ingredients[11] ? x.ingredients[11] : ''}</li>
                                <li>{x.ingredients[12] ? x.ingredients[12] : ''}</li>
                                <li>{x.ingredients[13] ? x.ingredients[13] : ''}</li>
                            </ul>
                            <p><span className=' text-black font-semibold '> Cooking Method</span>: {x.cooking_method}</p>
                            <p><span className=' text-black font-semibold '> Rating</span>: {x.rating}</p>
                            <button onClick={handleFavoriteButton} 
                            className='text-black border-2 border-black rounded py-2 px-5 font-bold mt-5' disabled={favoriteClicked}>
                                {isFavoriteAdded ? 'Added to Favorites' : 'Add To Favorite'}
                            </button>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Recipes;