import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../state/StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import { BsCreditCard2Back } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import './Payment.scss'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const totalPrice = basket?.reduce((amount, item) => amount + item.price, 0)

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const styleToastify = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }

    const cartRef = useRef()
    const exMonthRef = useRef()
    const exYearRef = useRef()
    const cvcRef = useRef()

    const handleBuy = () => {
        if (cartRef.current.value === "" || exMonthRef.current.value === "" || exYearRef.current.value === "" || cvcRef.current.value === "") {
            toast.error('Please enter Payment Method!', styleToastify)
        }
        else {
            dispatch({
                type: 'REMOVE_ALL',
            })
            cartRef.current.value = ""
            exMonthRef.current.value = ""
            exYearRef.current.value = ""
            cvcRef.current.value = ""
            toast.success('You have placed an order!', styleToastify)
        }
    }

    return (
        <div className="payment">
            <ToastContainer />
            <div className="payment__container">

                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                <section className="payment__section">
                    <h3 className="payment__title">Delivery Address</h3>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>144 An Duong Vuong Street</p>
                        <p>Tay Ho District, Hanoi 100000, Vietnam</p>
                    </div>
                </section>

                <section className="payment__section">
                    <h3 className="payment__title">Review items and delivery</h3>
                    <div className="payment__items">
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
                </section>

                <section className="payment__section">
                    <h3 className="payment__title">Payment Method</h3>

                    <div className="payment__details">
                        <h4>Card Details <BsCreditCard2Back className="payment__cardIcon" /></h4>
                        <form className="payment__formCard">
                            <label htmlFor="cardNumber">
                                <small>Card number</small>
                                <input type="number" id="cardNumber" placeholder="000-0000-0000-XXXX" ref={cartRef} />
                            </label>
                            <label htmlFor="expirationDate">
                                <small>Expiration date</small>
                                <section id="expirationDate">
                                    <input type="number" placeholder="MM" ref={exMonthRef} /> / <input type="number" placeholder="YY" ref={exYearRef} />
                                </section>
                            </label>
                            <label htmlFor="cvc">
                                <small>Security code</small>
                                <input type="number" id="cvc" placeholder="CVC" ref={cvcRef} />
                            </label>
                        </form>
                    </div>
                </section>

                <div className="payment__submit">
                    <h2>Order Total: {currencyFormat(totalPrice)}</h2>
                    <button className="payment__submit-btn" onClick={handleBuy}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Payment