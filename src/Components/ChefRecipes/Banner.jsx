import React from 'react'

function Banner({ recipes }) {

  if (!recipes) {
    // Render a loading state or return null if the recipes prop is not available yet
    return <div>Loading...</div>;
  }
  const { chef_name, chef_picture, description, likes, number_of_recipes, years_of_experience } = recipes;
  console.log(chef_name);

  return (
    <div className='flex text-center items-center p-10 border my-10  text-gray-700'>
      <div>
        <img src={chef_picture} className='w-8/12' />
      </div>
      <div>
        <h1 className=' text-5xl font-semibold text-black mb-5'>{chef_name}</h1>
        <p>{description}</p>
        <ul>
          <li>Experience : {years_of_experience} Years</li>
          <li>Number of Recipes : {number_of_recipes}</li>
          <li>Likes : {likes}</li>
        </ul>
      </div>
    </div>
  )
}

export default Banner;