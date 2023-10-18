import React from 'react'
import SinglePost from './bodyComponents/SinglePost'

const  Body = () => {
    return (
        <div className='bg-red text-white  w-[100vw] mx-auto flex flex-col items-center md:w-[80vw] md:ml-[15vw] lg:w-[80vw] lg:ml-[20vw] '>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
        </div>
    )
}

export default Body