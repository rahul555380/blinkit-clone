import React from 'react'
import Cart from './Cart'

export default function Cartsection() {

    const CartImg = [
        {
            id: "1",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
        },
        {
            id: "1",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png"
        },
        {
            id: "1",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png"
        },
    ]

    console.log(CartImg)
    return (
        <div className='grid grid-cols-4 gap-5 ml-3.5 my-6'>
            {CartImg.map((Imgurl, index) => {
                return <Cart key={index} Imgurl={Imgurl.img} />
            })}
        </div>
    )
}
