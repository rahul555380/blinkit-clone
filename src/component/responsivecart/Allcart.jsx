import React from 'react'
import ResponsiveCart from './Responsivecart'

export default function Allcart() {

  

   const Itemtwo = [
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
  return (
    <ResponsiveCart data={Itemtwo} />
  )
}
