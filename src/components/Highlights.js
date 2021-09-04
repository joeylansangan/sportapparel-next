import React from 'react'
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import {highlights} from './List';
import "react-multi-carousel/lib/styles.css";
import Highlight from './Highlight';


function Highlights() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
        }
      };
    return (
        <div className="my-10 mx-5">
            <Carousel
                swipeable={true}
                draggable={true}
                ssr={true}
                containerClass="carousel-container"
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px mx-1"
            >
            {highlights.map(({id, title, description, image, cta}) => (
                <Highlight 
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    image={image}
                    cta={cta}
                />
            ))}
                
            </Carousel>
        </div>
    )
}

export default Highlights
