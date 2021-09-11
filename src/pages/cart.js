import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import CartProduct from '../components/CartProduct';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { useSession } from 'next-auth/client';
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import Copyright from '../components/Copyright';
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key);


function cart() {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    const [session] = useSession();

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        // call backend to create checkout session
        const checkoutSession = await axios.post('/api/create-checkout-session', 
        {
            items: items,
            email: session.user.email
        });

        // redirect user to stripe checkout screen
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if (result.error) alert(result.error.message);
    };

    console.log(session)
    useEffect(() => {
        if (items.length > 0){
            let total = items.reduce((currentTotal, item) => {
                return item.price + currentTotal
            })
        }
    })
    return (
        <div>
            <Header/>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="p-6 space-y-6">
                    {items.length === 0 && (
                        <>
                            <h2 className="uppercase text-4xl adiBold">Your bag is empty</h2>
                            <p className="text-lg">Items added to your cart will appear here. Ready to shop?</p>
                            <button className="bg-black text-white flex items-center space-x-3 uppercase adiBold px-5 py-3 tracking-widest hover:text-gray-400"><span>Get started</span><CgArrowLongRight /></button>
                        </>
                    )}

                    {items.length > 0 && ( 
                    <div className="flex flex-col">
                        <h2 className="uppercase text-4xl adiBold">Your bag</h2>
                        <div className="flex space-x-1">
                            <span className="uppercase">total: </span>
                            <span>{items.length} item(s)</span>
                            <span className="adiBold ml-3">${total}</span>
                        </div>
                    </div>
                    )}

                    {/* items in bag */}
                    {items.map((item, i) => (
                        <CartProduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image} 
                        />
                    ))}
                </div>


                {items.length > 0 && (
                <div className="h-fit p-6 m-0 md:m-6 w-full md:w-5/12 border-transparent md:border-gray-300 border-1 space-y-6">
                    <p className="adiBold uppercase">Order Summary</p>
                    <div className="flex justify-between">
                        <p className="uppercase">{items.length} item(s)</p>
                        <p>${total}</p>
                    </div>
                    <div className="flex justify-between"> 
                        <p className="uppercase">Delivery</p>
                        <p>$4.99</p>
                    </div>
                    <div className="border-1 border-black p-4 flex flex-grow items-center justify-between cursor-pointer h-10 bg-white">
                        <input 
                            className="h-full flex-grow flex-shrink bg-white focus:outline-none tracking-wider" 
                            type="text" 
                            placeholder="Enter Your Promo Code"
                        />
                        <AiOutlinePlus size="1.5em"/>
                    </div>
                    <div className="flex justify-between">
                        <p className="uppercase adiBold">total</p>
                        <p>${total + 4.99}</p>
                    </div>
                    <button 
                        role="link"
                        onClick={createCheckoutSession}
                        disabled={!session}
                        className="bg-black w-full tracking-widest h-10 p-6 uppercase adiBold items-center text-white flex justify-between"
                        >
                        <span>{!session ? "Sign in to checkout" : "Proceed to checkout"}</span>
                        <CgArrowLongRight />
                    </button>
                </div>
                )}
            </div>
            <Copyright/>
        </div>
    )
}

export default cart

