import React from 'react'
import Product from './Product'
import Carousel from "react-multi-carousel";
import {highlights} from './List';
import "react-multi-carousel/lib/styles.css";

function ProductFeed({products}) {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

      const divStyle={
          width: "100%",
          height: "50px",
          background: "black",
          position: "absolute",
          top: "0"
      }

    return (
        <div className="relative">
            <div style={divStyle}>
         </div>

            <div className="my-10 mx-5">
            <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    centerMode={true}
                    ssr={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container relative"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px border-0.5 border-transparent hover:border-gray-500 m-4 bg-white"
                >

                    {products.filter(product => product.category === "women's clothing" || product.category === "men's clothing").map(
                        ({id, image, title, price, category}) => (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                price={price}
                                image={image}
                                category={category}
                            />
                        ))}
             </Carousel>
            </div>

        </div>
    )
}

export default ProductFeed
