import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderSession from '../components/OrderSession';

function orders() {
    return (
        <div>
            <Header/>
            <OrderSession/>
            <Footer />
        </div>
    )
}

export default orders;