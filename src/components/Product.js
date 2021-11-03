import React, {useState} from 'react';
import Image from 'next/image';
import { CgArrowLongRight } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({id, image, title, price, category}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            category,
            image
        }

        dispatch(addToBasket(product))
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className="bg-white py-4 flex justify-center">
                    <Image src={image} width={150} height={150} objectFit="contain" alt="streetwear-item"/>
                </div>
                <div className="p-2">
                    <p>{title}</p>
                    <p className="text-gray-500 capitalize">{category}</p>
                    <p> ${price}</p>
                </div>
            </div>
             <button onClick={addItemToBasket} className="p-2 ml-2 border-2 border-black cursor-pointer  uppercase tracking-wider adiBold flex items-center justify-between hover:text-gray-500 hover:border-gray-500">Add to Bag<CgArrowLongRight className="ml-3" size="1.5em"/></button>
        </div>
    )
}

export default Product
