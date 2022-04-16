import React from 'react'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../../state/StateProvider'
import './Checkout.scss'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Advertisement"
                />
                <h3 className="checkout__welcome">Hello, {user ? user?.email : 'Gest'}</h3>
                <h2 className="checkout__title">
                    Your shopping Basket
                </h2>
                {
                    basket?.map(item => (
                        <CheckoutProduct
                            key={item.id + Math.floor(Math.random() * 1000001)}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                }
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout