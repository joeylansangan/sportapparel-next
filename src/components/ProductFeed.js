import React from 'react'
import Image from 'next/image'
import Product from './Product'

function ProductFeed({products}) {
    return (
        <div >
            <h1>product here</h1>
            {products.map(({id, image, title, price}) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                />
                
                // <div key={id}>
                //     <Product 
                //         key={id}
                //         id={id}
                //         brand={brand}
                //         name={name}
                //         retailPrice={retailPrice}
                //         releaseYear={releaseYear}
                //         image={image.original}
                //     />
                // </div>
            ))}
        </div>
    )
}

export default ProductFeed
