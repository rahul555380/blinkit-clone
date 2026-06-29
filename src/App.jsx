import React, { useState } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Banner from './banner/Banner'
import Cartsection from './component/Cart/Cartsection'
import Categorysection from './component/category/Categorysection'
import Responsivesection from './component/responsivecart/Responsivesection'
import Allcart from './component/responsivecart/Allcart'



export default function App() {

  const itemlist = [
    {
      id: 1,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/adebcc0a-e373-4bc5-aa6f-e504d9d2014b.png",
      timer: "8 Mint",
      title: "Saras Toned Milk",
      gram: "500 ml",
      price: "28",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/016db06e-1840-4069-b9b4-dec66e8ba4c9.png",
      timer: "8 Mint",
      title: "Saras Gold Full Cream Milk",
      gram: "500 ml",
      price: "35",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/95a47dbf-adcd-4631-8b95-acae31bc5242.png",
      timer: "8 Mint",
      title: "Saras Cup Curd",
      gram: "200 g",
      price: "18",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png",
      timer: "8 Mint",
      title: "Amul Taaza Toned Milk",
      gram: "500 ml",
      price: "28",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png",
      timer: "8 Mint",
      title: "Amul Gold Full Cream Milk",
      gram: "500 ml",
      price: "35",
    },
    {
      id: 6,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e7023096-622d-4e2e-9c2c-a7689262c36f.png",
      timer: "8 Mint",
      title: "Amul Masti Pouch Curd",
      gram: "1kg",
      price: "80",
    },
    {
      id: 7,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png",
      timer: "8 Mint",
      title: "Amul Salted Butter",
      gram: "100 g",
      price: "60",
    },
    {
      id: 8,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1ded64a0-9f20-4a1d-8211-156f221b377b.png",
      timer: "8 Mint",
      title: "Amul Buffalo A2 Milk",
      gram: "500 ml",
      price: "38",
    },
    {
      id: 9,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/df3666bc-c07b-4a71-909a-63d829ebaed0.png",
      timer: "8 Mint",
      title: "Harvest Gold Hearty Brown Bread",
      gram: "400 g",
      price: "55",
    },
  ]

  const itemlist2 = [
    {
      id: 1,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0f8ebd88-7b67-4542-bda1-87f8182d767d.png",
      timer: "8 Mint",
      title: "Ultimate Rolling Paper with Filter Tips & ...",
      gram: "32 pcs",
      price: "90",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8d385b40-e78b-434a-962d-50ba667891bf.png",
      timer: "8 Mint",
      title: "Thins Pre-Rolled Rolling Paper - LIT",
      gram: "1 pack",
      price: "25",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a6eb6af-8143-4195-a788-c350255a8e1e.png",
      timer: "8 Mint",
      title: "Ultimate Rolling Paper with Filter Tips &...",
      gram: "32 pcs",
      price: "80",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f53cbbd4-0a1f-4878-9de9-600f9549d725.png",
      timer: "8 Mint",
      title: "Perforated Wide Tips Roach - Raw",
      gram: "50 pcs",
      price: "50",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/58d493f5-53e6-48b6-a426-80257a1572d6.png",
      timer: "8 Mint",
      title: "Brown Rolling Paper (Small) - Stash Pro",
      gram: "40 pcs",
      price: "45",
    },

    {
      id: 6,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/500d636d-e59e-4835-a0e5-3d8e7ad26d3b.png",
      timer: "8 Mint",
      title: "Brown Ripper Rolling Paper 32 Leaves + 32...",
      gram: "32 pcs",
      price: "120",
    },
    {
      id: 7,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/51d164ea-0ee2-4080-aac3-0affdaf34ded.png",
      timer: "8 Mint",
      title: "Classic Filter Tips & Rolling Paper (King..",
      gram: "32 pcs",
      price: "150",
    },
    {
      id: 8,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8d385b40-e78b-434a-962d-50ba667891bf.png",
      timer: "8 Mint",
      title: "Thins Pre-Rolled Rolling Paper - LIT",
      gram: "1 pcs",
      price: "25",
    },
  ]

  const itemlist3 = [
    {
      id: 1,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1779421790948-2501.png",
      timer: "8 Mint",
      title: "Protein Chef Baked Coated Peanuts (Masa...",
      gram: "50 g",
      price: "69",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1779421790948-2535.png",
      timer: "8 Mint",
      title: "Lo Foods Gluten Free Millet Ragi Chips",
      gram: "75 g",
      price: "90",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776829632782-897.png",
      timer: "8 Mint",
      title: "Red Rock Deli Baked Chips (Risotto) 40%...",
      gram: "53 g",
      price: "51",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776829632782-895.png",
      timer: "8 Mint",
      title: "Red Rock Deli Kettle Chips (Basil Thai) No..",
      gram: "58 g",
      price: "51",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a55bb8b-bf09-454b-9233-cc00404c6a5c.png",
      timer: "8 Mint",
      title: "Beanly Choco Hazelnut Spread with Breadsticks",
      gram: "52 g",
      price: "99",
    },
    {
      id: 6,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776829632782-894.png",
      timer: "8 Mint",
      title: "Red Rock Deli Baked Chips (Greek Salad)",
      gram: "53 gm",
      price: "51",
    },
    {
      id: 7,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1777353225068-641.png",
      timer: "8 Mint",
      title: "Protein Chef Sprouted Flour Bhujia (No Palm...",
      gram: "80 g",
      price: "99",
    },
    {
      id: 8,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1778041512384-134.png",
      timer: "8 Mint",
      title: "Protein Chef Double Protein Crunchy Soya",
      gram: "65 g",
      price: "59",
    },
    {
      id: 9,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1779680455148-4.png",
      timer: "8 Mint",
      title: "Protein Chef Himalayan Pink Salted Peanuts",
      gram: "100 g",
      price: "59",
    },
  ]

  const itemlist4 = [
    {
      id: 1,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/043e45a9-9258-47a3-b1d8-7ce3f962f919.png",
      timer: "8 Mint",
      title: "Coconut Hookah Coal by Bongchie",
      gram: "250 g",
      price: "125",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/55cbc96f-5555-47f4-9b17-67e15a255875.png",
      timer: "8 Mint",
      title: "Instant Ignite Magic Coal by Bongchie",
      gram: "10 pcs",
      price: "80",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/36715247-9060-4cb5-9fb1-a342291f938e.png",
      timer: "8 Mint",
      title: "Flat Coconut Hookah Coal by Bongchie",
      gram: "30 pcs",
      price: "180",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4dcd391b-15ef-4232-aab2-971fb9ac9a22.png",
      timer: "8 Mint",
      title: "Natural Coconut Hookah Charcoal Coal",
      gram: "30 pcs",
      price: "125",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2d829ad1-daf8-439f-aec0-2d4906ccde83.png",
      timer: "8 Mint",
      title: "Square Shape Pre-Cut Hookah Foil with Pin -",
      gram: "30 pcs",
      price: "80",
    },
    {
      id: 6,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c4ae0b90-a4d4-4e83-8ac2-d13b34aff09f.png",
      timer: "8 Mint",
      title: "Mouthpiece Hookah Pipe by Cocoyaya",
      gram: "40 pcs",
      price: "100",
    },
    {
      id: 7,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/87e34db4-0d40-4aa5-9b7f-11a2e98c61c2.png",
      timer: "8 Mint",
      title: "Pre-Cut Hookah Foil by Cocoyaya",
      gram: "25 pcs",
      price: "99",
    },
    {
      id: 8,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a30612f8-f945-473c-9602-0c84e499116f.png",
      timer: "8 Mint",
      title: "Iron Hookah Tong by Smokey Lust",
      gram: "1 pcs",
      price: "100",
    },
    {
      id: 9,
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/eaefddd0-768f-4fe2-acaf-faef5d827730.png",
      timer: "8 Mint",
      title: "Premium Hookah Pipe by Smokey Lust",
      gram: "1 pcs",
      price: "100",
    },
  ]

  return (
    <>
      < Header />
      <Banner />
      <Cartsection />
      <Categorysection />
      <div className='w-[98%] m-auto '>
        <Responsivesection title="Dairy, Bread & Eggs" item={itemlist} />
        <Responsivesection title="Rolling paper & tobacco" item={itemlist2} />
        <Responsivesection title="Snacks & Munchies" item={itemlist3} />
        <Responsivesection title="Hookah" item={itemlist4} />
      </div>

      <Footer />
    </>

  )
}
