import React, {useEffect} from 'react'
import Header from '../components/Header'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CartProduct from '../components/CartProduct';

function cart() {
    let total = 0;
    const items = useSelector(selectItems);

    useEffect(() => {
        if (items.length !== 0){
            let total = items.reduce((currentTotal, item) => {
                return item.price + currentTotal
            })
        }
    })

    return (
        <div>
            <Header/>
            <div>
                <div className="p-6 space-y-6">
                    <h2 className="uppercase text-4xl adiBold">{items.length === 0 ? 'Your bag is empty' : 'Your bag'}</h2>
                    {/* <div className={items.length === 0 ? 'hidden' : 'flex space-x-1'}>
                        <span className="uppercase">total: </span>
                        <span>{items.length}</span>
                        <span className="adiBold">{total}</span>
                    </div> */}
                    {/* items in bag */}
                    {items.map((item, i) => (
                        <CartProduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image} 
                        />
                    ))}

                    
                </div>
            </div>
        </div>
    )
}

export default cart

