import moment from 'moment'
import React from 'react'

function Order({ id, amount, amountShipping, items, timestamp, images }) {
    // console.log(items)
    return (
        <div className="mb-4 relative border-0.5">
            <div className="flex bg-adi_gray-light items-center p-4 justify-between">
                <div className="flex items-start space-x-2 sm:space-x-8 text-xs sm:text-lg">
                    <div className="flex flex-col">
                        <span className="uppercase adiBold">order placed</span>
                        <span>{moment.unix(timestamp).format("DD MMM YYYY")}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="uppercase adiBold">total</span>
                        <span>${amount}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="uppercase adiBold">shipping</span>
                        <span>${amountShipping} - Priority Shipping</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="w-32 lg:w-60 truncate text-xs">ORDER # {id} </span>
                    <span className="text-blue-500 text-base sm-text-xl self-end">{items.length} item(s)</span>
                </div>
            </div>
            <div className="p-5 flex justify-between">
                <div className="flex space-x-6 overflow-x-auto">
                    {images.map((image, idx) => (
                        <img key={idx} src={image} alt="shop-item" className="h-20 object-contain sm:h-32" />
                    ))}
                </div>
                <div className="space-y-4 w-36">
                    <button className="bg-black w-full tracking-widest h-6 py-2 px-4 uppercase items-center text-white">
                            <span>Track Package</span>
                        </button>
                    <button className="border w-full tracking-widest h-6 py-2 px-4 uppercase items-center">
                        <span>View order</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Order
