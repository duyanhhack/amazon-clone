import React from 'react'
import { useStateValue } from '../../state/StateProvider'
import './AddToCart.scss'

function AddToCart({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    const handleAddtoBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <button onClick={handleAddtoBasket} className="product__buttonAdd">Add to Basket</button>
    )
}

export default AddToCart