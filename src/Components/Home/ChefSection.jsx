import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ChefSection() {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-aniqa4.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='my-20 text-gray-800'>
            <h1 className=' text-center py-5 text-3xl font-semibold text-black'>Get Introduced With Our Chefs</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    chefs.map(chef =>
                        <div key={chef.id} className='p-5 border rounded text-center'>
                            <img src={chef.chef_picture} className='w-11/12 h-80 rounded mx-auto mb-3' />
                            <p>Name : {chef.chef_name}</p>
                            <p>Years of experience : {chef.years_of_experience}</p>
                            <p>Number of recipes : {chef.number_of_recipes}</p>
                            <p>Likes : {chef.likes}</p>
                            <button className=' bg-black text-white rounded px-5 py-2 mt-3'>
                                <Link to={`/chefrecipes/${chef.id}`}>View Recipes</Link>
                            </button>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ChefSection;