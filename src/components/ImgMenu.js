import React from 'react';
import Image from 'next/image';

function ImgMenu() {
    return (
        <div className="my-12 mx-6 flex flex-col md:flex-row justify-center">
            <div className="flex justify-center">
                <div className="bg-adi_gray-light px-6 pb-6 m-1">
                    <Image 
                        height={250}
                        width={250}
                        src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bbe7feb2146e46e39c4cad6a01124ea6_9366/Primeblue_SST_Track_Pants_Burgundy_H34580_21_model.jpg"
                        alt="women's clothing"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center">women's clothing</p>
                </div>
                <div className="bg-adi_gray-light px-6 pb-6 m-1">
                    <Image 
                        height={250}
                        width={250}
                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ca1a56e5d5d84d798543ac710120dcc5_9366/essentials-fleece-3-stripes-full-zip-hoodie.jpg"
                        alt="hoodies & sweatshirts"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center ">hoodies & sweatshirts</p>
                </div>
            </div>
           <div className="flex justify-center">
            <div className="bg-adi_gray-light px-6 pb-6 m-1">
                    <Image 
                        height={250}
                        width={250}
                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0237690d85e3494ebb00ad1d0179aeed_9366/nmd_r1-shoes.jpg"
                        alt="women's sneakers"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center">women's sneakers</p>
                </div>
                <div className="bg-adi_gray-light px-6 pb-6 m-1">
                    <Image 
                        height={250}
                        width={250}
                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d2faada175254d2ca765ac91005fd5ee_9366/ultraboost-21-shoes.jpg"
                        alt="new arrivals"
                    />
                    <p className="uppercase underline adiBold tracking-widest text-center">new arrivals</p>
                </div>
           </div>
            
        </div>
    )
}

export default ImgMenu
