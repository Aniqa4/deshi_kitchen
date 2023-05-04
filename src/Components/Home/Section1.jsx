import React from 'react'

function Section1() {
    return (
        <div className=' bg-gray-100 p-10 text-gray-700'>
            <h1 className=' text-center text-3xl mb-5 text-black font-semibold'>Popular In Bangladesh</h1>
            <div className='md:grid md:grid-cols-3'>
                <div className='md:flex items-center gap-5'>
                    <img src="kacchi.jpg" className=' rounded h-36' />
                    <h1> Kacchi Biryani</h1>
                    <p></p>
                </div>
                <div className='md:flex items-center gap-5'>
                    <img src="Fuchka.jpg" className=' rounded h-36' />
                    <h1>Fuchka</h1>
                    <p></p>
                </div>
                <div className='md:flex items-center gap-5'   >
                    <img src="ilish.jpg" className=' rounded h-36' />
                    <h1>Shorshe Ilish</h1>
                    <p></p>
                </div>
            </div>

        </div>
    )
}

export default Section1;