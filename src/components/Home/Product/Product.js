import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useStateValue } from '../../../state/StateProvider'
import './Product.scss'

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    // console.log('this is the basket >>>', state.basket);

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
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(Math.round(rating)).fill().map((_, i) => (
                            <AiFillStar key={i} />
                            // if use forEach => no 'key'
                        ))
                    }
                    {/* <small className="product__rating-detail">{rating}</small> */}

                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={handleAddtoBasket} className="product__buttonAdd">Add to Basket</button>
        </div>
    )
}

export default Product