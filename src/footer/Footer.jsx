import React, { useState } from 'react'

export default function Footer(setlist) {

    return (
        <div className='w-full flex flex-col lg:flex-row gap-10 p-5'>

            {/* Left Section */}
            <div className='w-full lg:w-1/3'>
                <h2 className='text-2xl font-bold mb-4'>Useful Links</h2>
                <ol className='grid grid-cols-2 sm:grid-cols-3 grid-flow-col grid-rows-6  gap-y-3'>
                    <li>Blog</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>FAQs</li>
                    <li>Security</li>
                    <li>Contact</li>
                    <li>Partner</li>
                    <li>Franchise</li>
                    <li>Seller</li>
                    <li>Warehouse</li>
                    <li>Deliver</li>
                    <li>Resources</li>
                    <li>Recipes</li>
                    <li>Bistro</li>
                    <li>District</li>
                    <li>Blinkit Ambulance</li>
                </ol>
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-2/3'>
                <h2 className='text-2xl font-bold mb-4'>Categories</h2>
                <ol className='grid grid-cols-2 sm:grid-cols-3   gap-y-3'>
                    <li><a href="#">Vegetables & Fruits</a></li>
                    <li><a href="#">Dairy & Breakfast</a></li>
                    <li><a href="#">Munchies</a></li>
                    <li><a href="#">Cold Drinks & Juices</a></li>
                    <li><a href="#">Instant & Frozen Food</a></li>
                    <li><a href="#">Tea, Coffee & Milk Drinks</a></li>
                    <li><a href="#">Bakery & Biscuits</a></li>
                    <li><a href="#">Sweet Tooth</a></li>
                    <li><a href="#">Atta, Rice & Dal</a></li>
                    <li><a href="#">Dry Fruits, Masala & Oil</a></li>
                    <li><a href="#">Sauces & Spreads</a></li>
                    <li><a href="#">Chicken, Meat & Fish</a></li>
                    <li><a href="#">Paan Corner</a></li>
                    <li><a href="#">Organic & Premium</a></li>
                    <li><a href="#">Baby Care</a></li>
                    <li><a href="#">Pharma & Wellness</a></li>
                    <li><a href="#">Cleaning Essentials</a></li>
                    <li><a href="#">Home Furnishing & Decor</a></li>
                    <li><a href="#">Personal Care</a></li>
                    <li><a href="#">Pet Care</a></li>
                    <li><a href="#">Beauty & Cosmetics</a></li>
                    <li><a href="#">Kitchen & Dining</a></li>
                    <li><a href="#">Fashion & Accessories</a></li>
                    <li><a href="#">Electronics & Electricals</a></li>
                    <li><a href="#">Stationery Needs</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Toys & Games</a></li>
                    <li><a href="#">Print Store</a></li>
                    <li><a href="#">E-Gift Cards</a></li>
                    <li><a href="#">Rakhi Gifts</a></li>
                </ol>
            </div>

        </div>
    )
}