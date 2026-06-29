import React from 'react'

export default function Cart({Imgurl}) {
    return (
        <div className='hidden lg:block'>
            <img src={Imgurl} alt="" className='w-full h-full' />
        </div>
    )
}
