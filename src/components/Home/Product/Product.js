import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import AddToCart from '../../AddToCartBTN/AddToCart'
import { useStateValue } from '../../../state/StateProvider'
import './Product.scss'

function Product({ id, title, image, price, rating, description }) {
    const [state, dispatch] = useStateValue();

    const handleShowDetail = () => {
        dispatch({
            type: 'SHOW_DETAIL',
            item: {
                id,
                title,
                image,
                price,
                rating,
                description
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
                        ))
                    }
                </div>
            </div>
            <Link to="/detail" onClick={handleShowDetail}>
                <img src={image} alt="Product_Image" />
            </Link>
            <AddToCart
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
            />
        </div>
    )
}

export default Product