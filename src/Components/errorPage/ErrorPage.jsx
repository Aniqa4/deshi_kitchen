import React from 'react'

function ErrorPage() {
    return (
        <div className='flex justify-center text-center text-red-700'>
            <div>
                <img src="error.jpg" />
                <p>404 page doesn't exist</p>
            </div>
        </div>
    )
}

export default ErrorPage;