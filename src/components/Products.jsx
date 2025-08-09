import React from 'react'
import Heading from './Heading'
import Img1 from '../assets/product/p-1.jpg'
import Img2 from '../assets/product/p-2.jpg'
import Img3 from '../assets/product/p-3.jpg'
import Img4 from '../assets/product/p-4.jpg'
import Img5 from '../assets/product/p-5.jpg'
import Img6 from '../assets/product/p-9.jpg'
import Img7 from '../assets/product/p-7.jpg'
import ProductCard from './ProductCard'

const ProductData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountian",
        price: "420",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Img3,
        title: "Goggle",
        price: "320",
        aosDelay: "400"
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
];

const ProductData2 = [
    {
        id: 1,
        img: Img5,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img6,
        title: "Rocky Mountian",
        price: "420",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Img7,
        title: "Goggle",
        price: "320",
        aosDelay: "400"
    },
    {
        id: 2,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
]

const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header Section */}
            <Heading title="Our Product" subtitle={"Explore Our Product"}/>
            {/* Body Section */}
            <ProductCard data={ProductData}/>
            <ProductCard data={ProductData2}/>
        </div>
    </div>
  )
}

export default Products