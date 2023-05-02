import React from 'react'

function Banner() {
    return (
        <div className='flex text-3xl gap-20 items-center my-10'>
            <div className='w-6/12'>
                <img src="banner.jpg" className=' rounded' />
            </div>
            <div>
                <h1>Welcome to 
                    <span className=' text-green-950 font-bold'> Deshi</span>
                    <span className=' text-red-800 font-bold'>Kitchen</span>
                </h1>
                <p className=' text-gray-600 text-xl'>
                    You can find here Bangladeshi chefs and Bangladeshi cuisines.
                </p>
            </div>
        </div>
    )
}

export default Banner;