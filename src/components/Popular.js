import React from 'react'

function Popular() {

    return (
        <div className="mb-10">
            <h1 className="uppercase adiBold py-3 text-3xl my-5 tracking-wider text-center w-full">popular right now</h1>
            <div className="flex justify-center">

                <button className="p-2 text-xl mx-2 uppercase border-0.5 border-gray-200 hover:border-black">slides</button>
                <button className="p-2 text-xl mx-2 uppercase border-0.5 border-gray-200 hover:border-black">nmd r1</button>
                <button className="p-2 text-xl mx-2 uppercase border-0.5 border-gray-200 hover:border-black">backpack</button>
                <button className="p-2 text-xl mx-2 uppercase border-0.5 border-gray-200 hover:border-black">lego</button>
                <button className="p-2 text-xl mx-2 uppercase border-0.5 border-gray-200 hover:border-black">socks</button>
            </div>

        </div>
    )
}

export default Popular
