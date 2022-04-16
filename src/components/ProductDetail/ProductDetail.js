import React from 'react'
import { useStateValue } from '../../state/StateProvider'
import { AiFillStar } from 'react-icons/ai'
import AddToCart from '../AddToCartBTN/AddToCart'
import './ProductDetail.scss'

function ProductDetail() {
    const [{ detail }, dispatch] = useStateValue();

    return (
        <div className="product-detail">
            {
                detail?.map((item) => (
                    <div className="product-detail__container" key={item.id}>
                        <section className="product-detail__image">
                            <img src={item.image} alt="" />
                        </section>
                        <section className="product-detail__details">
                            <h1 className="product--name">{item.title}</h1>
                            <p className="product--description">{item.description}</p>
                            <p className="product--price">$<strong>{item.price}</strong></p>
                            <div className="product--rating">
                                {
                                    Array(Math.round(item.rating)).fill().map((_, i) => (
                                        <AiFillStar key={i} />
                                    ))
                                }
                            </div>

                            <AddToCart
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        </section>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductDetail