import React, {useState} from 'react';
import Image from 'next/image';

function Product({id, image, title, price, category}) {
    return (
        <a className="cursor-pointer">
            <div className="bg-white py-4 flex justify-center">
                <Image src={image} width={150} height={150} objectFit="contain"/>
            </div>
            <div className="p-2">
                <p>{title}</p>
                <p className="text-gray-500 capitalize">{category}</p>
                <p> ${price}</p>
             </div>
        </a>
    )
}

export default Product
