import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { CgArrowLongRight } from "react-icons/cg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Banner() {
    return (
        <div className="relative h-full">
            <Carousel 
                autoPlay 
                infiniteLoop 
                showStatus={false} 
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                >
                    <div className="h-full relative">
                    <div className="h-full absolute ml-12 sm:ml-16 w-3/4 sm:w-1/3 space-y-2 text-white text-left flex flex-col justify-center">
                            <h2 className="uppercase tracking-wider adiBold text-2xl sm:text-4xl">Members week is here</h2>
                            <p className="text-base sm:text-xl">Explore a curated selection of products for Members only, including first access to the Ultraboost 21 College pack.</p>
                            <button className="bg-white w-max tracking-widest h-10 p-6 uppercase adiBold flex justify-around items-center text-black">shop collection <CgArrowLongRight className="ml-5" size="1.5em" /></button>
                        </div>
                        <img
                            className="h-full"
                            loading="lazy" 
                            src="./assets/mh-1.png"
                            alt="adidas-court"
                            />
                    </div>
                    <div className="h-full relative">
                    <div className="h-full absolute ml-12 sm:ml-16 w-3/4 sm:w-1/3 space-y-2 text-white text-left flex flex-col justify-center">
                            <h2 className="uppercase tracking-wider adiBold text-2xl sm:text-4xl">Back to school</h2>
                            <p className="text-base sm:text-xl">Comeback season is in full effect. Find all-new back to school gear here.</p>
                            <button className="bg-white w-max tracking-widest h-10 p-6 uppercase adiBold flex justify-around items-center text-black">shop now <CgArrowLongRight className="ml-5" size="1.5em"  /></button>
                        </div>
                        <img 
                            className="h-full"
                            loading="lazy" 
                            src="./assets/mh-4.png"
                            alt="adidas-abstract"
                            />
                    </div>
                    <div className="h-full relative">
                    <div className="h-full absolute ml-12 sm:ml-16 w-3/4 sm:w-1/3 space-y-2 text-white text-left flex flex-col justify-center">
                            <h2 className="uppercase tracking-wider adiBold text-2xl sm:text-4xl">Dame 7 global bank</h2>
                            <p className="text-base sm:text-xl">The ball's in your court. How will you get the bag?</p>
                            <button className="bg-white w-max tracking-widest h-10 p-6 uppercase adiBold flex justify-around items-center text-black">shop dame-7 <CgArrowLongRight className="ml-5" size="1.5em"  /></button>
                        </div>
                        <img 
                            className="h-full"
                            loading="lazy" 
                            src="./assets/mh-3.png"
                            alt="adidas-abstract"
                            />
                    </div>
            </Carousel>
        </div>
    )
}

export default Banner
