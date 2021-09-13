import moment from 'moment';
import { getSession, useSession } from 'next-auth/client';
import React from 'react';
import Header from '../components/Header';
import db from '../../firebase';
import Order from '../components/Order';

function orders({ orders }) {
    // console.log(orders)
    const [session] = useSession();

    return (
        <div>
            <Header/>
            <div className="p-6">
                <h2 className="uppercase adiBold text-2xl tracking-wider">Your Orders</h2>
                {session ? (
                    <h2>{orders.length} orders placed</h2>
                ) : (
                    <h2>Please sign in to ssee your orders </h2>
                )}

                <div className="mt-5 spaace-y-4">
                    {orders?.map(({ id, amount, amountShipping, items, timestamp, images }) => (
                        <Order
                            key={id}
                            id={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default orders;

export async function getServerSideProps(context){
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // get the users logged in credentials
    const session = await getSession(context);

    if (!session) {
        return {
            props: {}
        }
    }

    // get orders from firebase
    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();

    // get orders object
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    }

}
