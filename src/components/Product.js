import React, {useState} from 'react';
import Image from 'next/image';

function Product({ id, title, price, description, category, image }) {

    const noImage = "http://www.torontowaterfrontmarathon.com/wp-content/uploads/2018/11/ComingSoon-square.jpg"
    
    return (
        <div>
            <div >
                <p>{title}</p>
                {/* <Image src={image ? image : noImage } /> */}
            </div>            
        </div>
    )
}

export default Product
