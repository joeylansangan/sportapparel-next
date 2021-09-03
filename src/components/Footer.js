import React from 'react'

function Footer() {
    return (
        <div className="bg-black pt-8">
            <div className="flex px-8 py-4">
                <div className="text-white mr-12">
                    <p className="cursor-pointer hover:underline adiBold text-sm uppercase mb-2">promotions</p>
                    <p className="cursor-pointer hover:underline mb-3 adiBold text-sm uppercase">sign up for email</p>
                    <p className="cursor-pointer hover:underline mb-3 adiBold text-sm uppercase">become a member</p>
                    <p className="cursor-pointer hover:underline mb-3 adiBold text-sm uppercase">send us feedback</p>
                </div>
                <div className="mb-2 text-gray-400">
                    <p className="cursor-pointer hover:underline mb-3 adiBold text-sm uppercase text-white">get help</p>
                    <p className="cursor-pointer hover:underline mb-3 capitalize">order status</p>
                    <p className="cursor-pointer hover:underline mb-3 capitalize">shipping and delivery</p>
                    <p className="cursor-pointer hover:underline mb-3 capitalize">returns</p>
                    <p className="cursor-pointer hover:underline mb-3 capitalize">contact us</p>
                </div>
            </div>
            <div className="bg-adi_gray text-gray-300 flex py-6 px-8 justify-between text-xs">
                <p className="pointer">2021 adidas Inc.</p>
                <div className="flex">
                    <p className="capitalize mr-3">privacy policy</p>
                    <p className="capitalize">terms and conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
