import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useStateValue } from '../../state/StateProvider'
import './CheckoutProduct.scss'

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const handleRemove = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="chekoutProduct" key={id} id={id}>
            <img className="chekoutProduct__image" src={image} alt="" />
            <div className="chekoutProduct__info">
                <p className="chekoutProduct__title">{title}</p>
                <p className="chekoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="chekoutProduct__rating">
                    {
                        Array(Math.round(rating)).fill().map((_, i) => (
                            <AiFillStar key={i} />
                        ))
                    }
                </div>
                <button onClick={handleRemove} className="chekoutProduct__removeBtn">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct