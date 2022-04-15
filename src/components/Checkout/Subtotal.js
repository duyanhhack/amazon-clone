import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../state/StateProvider'
import { ToastContainer, toast } from 'react-toastify';
import './Subtotal.scss'

function Subtotal() {
    const navigate = useNavigate();

    const [{ basket, user }, dispatch] = useStateValue();

    const totalPrice = basket?.reduce((amount, item) => amount + item.price, 0)

    const styleToastify = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }


    function currencyFormat(num) {
        // stackoverflow
        // cant use react-currency-format
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket?.length} items): <strong>{currencyFormat(totalPrice)}</strong>
            </p>
            <label htmlFor="check-gift" className="subtotal__gift" >
                <input id="check-gift" type="checkbox" />
                This order contains a gift
            </label>

            <button onClick={() => { user ? navigate('/payment') : toast.error('Please Login to place your order!', styleToastify) }}>Proceed to Checkout</button>
            <ToastContainer />
        </div>
    )
}

export default Subtotal