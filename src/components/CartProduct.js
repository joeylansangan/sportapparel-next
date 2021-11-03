import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { GoChevronDown } from "react-icons/go";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { removeFromBasket } from '../slices/basketSlice';

function CartProduct({id, title, price, rating, description, category, image}) {

    const dispatch = useDispatch();
    
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }
    
    return (
        
        <div>
            <div className="flex border-0.5 border-black relative">
                <div className="flex p-4">
                    <Image 
                        src={image}
                        width={200} 
                        height={200} 
                        objectFit="contain"
                        alt="streetwear-item"
                    />
                </div>

                <div className="p-4 flex flex-col space-y-2 justify-between">
                    <div className="uppercase tracking-wider text-xl space-y-2">
                        <p className="w-11/12">{title}</p>
                        <p>{category}</p>
                        <p>${price}</p>
                    </div>
                    <div className="border-0.5 border-black w-min flex align-center p-2">
                        <span className="adiBold mr-8">1</span>
                        <GoChevronDown size="1.5em" />
                    </div>
                    
                </div>
                <AiOutlineCloseSquare onClick={removeItemFromBasket} className="absolute top-4 right-4 cursor-pointer" size="1.5em"/>
            </div>
        </div>
    )
}

export default CartProduct
