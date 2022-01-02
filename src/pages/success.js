import React from 'react';
import Link from 'next/link'
import { CgArrowLongRight } from 'react-icons/cg';
import Copyright from '../components/Copyright';
import Header from '../components/Header';

function success() {
    
    return (
        <div>
            <Header />
            <div className="p-6">
                <h2 className="uppercase text-5xl adiBold mb-2">Thank you, <br></br>your order has been placed.</h2>
                <p className="text-xl adiBold mb-6">We received your order and it is in process.</p>
                <h3 className="text-xl adiBold mb-2">Order Confirmation Email</h3>
                <p className="text-lg mb-6">You will be receiving a confirmation email with order details.</p>
                <h3 className="text-xl adiBold mb-2">What's next?</h3>
                <p className="text-lg">If you would like to check the status of your order(s) please press the link below.</p>
                <Link href="/orders" className="bg-black w-full tracking-widest h-10 p-6 uppercase adiBold items-center text-white flex justify-between my-6">
                        <span>Go to my orders</span>
                        <CgArrowLongRight />
                    </Link>
            </div>
            <Copyright/>
        </div>
    )
}

export default success
