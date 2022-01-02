import React from 'react'
import Header from '../components/Header'
import Copyright from '../components/Copyright';
import Checkout from '../components/Checkout';


function cart() {
    return (
        <div>
            <Header/>
            <Checkout/>
            <Copyright/>
        </div>
    )
}

export default cart

