import React from 'react'
import Header from '../components/Header'
import Image from 'next/image';
import { AiOutlineCloseSquare } from "react-icons/ai";

function cart() {
    return (
        <div className="">
            <Header/>
            <div>
                <div className="p-6 space-y-6">
                    <h2 className="uppercase text-4xl adiBold">Your bag</h2>
                    <div className="flex space-x-1">
                        <span className="uppercase">total: </span>
                        <span>(1 item)</span>
                        <span className="adiBold">$43.49</span>
                    </div>
                    <div className="flex border-0.5 border-black relative">
                        <Image 
                            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/fb9813283021403caab7ad4a011795d9_9366/HB1420_250_HB1420_21_model.jpg.jpg?sh=364&strip=false&sw=364" 
                            width={225} 
                            height={225} 
                            objectFit="contain"
                            />
                        <div className="p-4 flex flex-col space-y-2 justify-between">
                            <div className="uppercase tracking-wider text-xl space-y-2">
                                <p>Adidas sports sweatshirt</p>
                                <p>mens clothing</p>
                                <p>$43.99</p>
                            </div>
                            <button className="bg-black w-min tracking-widest h-10 p-6 uppercase adiBold flex justify-around items-center text-white">Checkout</button>
                        </div>
                        <AiOutlineCloseSquare className="absolute top-4 right-4 cursor-pointer" />
                       
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default cart

