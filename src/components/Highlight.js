import React from 'react';
import Image from 'next/image';

function Highlight({id, title, description, image}) {
    return (
        <div key={id} className="mx-2 flex flex-col justify-between h-full" >
            <div>
                <img src={image} width="100%"  alt="adidas-collection" />
                <p className="text-left uppercase adiBold tracking-wide my-1">{title}</p>
                <p className="text-left">{description}</p>
            </div>

            <div>
                <a className="uppercase underline adiBold mt-5">shop now</a>
            </div>
        </div>
    )
}

export default Highlight
