import React from 'react';
import Image from 'next/image';

function ImgMenu() {
    return (
        <div className="my-12 mx-6 flex flex-col md:flex-row justify-center">
            <div className="flex justify-center">
                <div className="bg-adi_gray-light cursor-pointer transition ease-in-out 1s hover:scale-105 px-6 pb-6 m-1">
                    <Image 
                        height={250} 
                        width={250}
                        src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/caba0bbad0a647d19266ac9400e207a7_9366/adicolor-primeblue-tricolor-cropped-tee.jpg"
                        alt="women's clothing"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center">women's clothing</p>
                </div>
                <div className="bg-adi_gray-light cursor-pointer transition ease-in-out 1s hover:scale-105 px-6 pb-6 m-1">
                    <Image 
                        height={250}
                        width={250}
                        src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/691df217bfd3461bbae5ad57010c9d95_9366/graphics-originals-attribute-pack-hoodie.jpg"
                        alt="hoodies & sweatshirts"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center ">hoodies & sweatshirts</p>
                </div>
            </div>
           <div className="flex justify-center">
            <div className="bg-adi_gray-light cursor-pointer transition ease-in-out 1s hover:scale-105 px-6 pb-6 m-1">
                    <Image 
                        height={250}
                        width={250}
                        src="https://image.goat.com/attachments/product_template_pictures/images/059/305/104/original/DH3718_101.png.png"
                        alt="women's sneakers"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center">women's sneakers</p>
                </div>
                <div className="bg-adi_gray-light cursor-pointer transition ease-in-out 1s hover:scale-105 px-6 pb-6 m-1">
                    <Image 
                        height={250}
                        width={250}
                        src="https://image.goat.com/attachments/product_template_pictures/images/059/821/145/original/DM8156_100.png.png"
                        alt="new arrivals"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center">new arrivals</p>
                </div>
           </div>
            
        </div>
    )
}

export default ImgMenu
