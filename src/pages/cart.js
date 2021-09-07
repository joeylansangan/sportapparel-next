import React, {useEffect} from 'react'
import Header from '../components/Header'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CartProduct from '../components/CartProduct';
import { useSession } from 'next-auth/client';

function cart() {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    const session = useSession();

    useEffect(() => {
        if (items.length > 0){
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
                {items.length > 0 && (
                    <>
                        <h2 className="whitespace-nowrap">
                            Subtotal ({items.length} items);
                            <span className="adiBold">
                                ${total}
                            </span>
                        </h2>

                        <button className="border-2 border-gray-200">
                            {!session ? "Sign in to checkout" : "Proceed to checkout"}
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default cart

