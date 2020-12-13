import React, { useEffect, useState } from 'react'
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating, amount }) {
    const [{ basket, totalAmount }, dispatch] = useStateValue();
    /*     console.log(basket) */
    const [count, setCount] = useState(0)
    const addToBasket = () => {
        basket.map(item => item.id === id && (item.amount = item.amount + 1))


        !basket.find(item => item.id === id) /* || basket.length === 0 */ ? dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                amount: amount
            }
        }) : dispatch({
            type: 'UPDATE_BASKET',
            basket: basket
        })
        dispatch({
            type: 'GET_TOTAL_AMOUNT',
            basket: basket
        })

    }

    return (

        <div className="product">
            <img src={image} alt="" />
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((item, i) => (
                        <p key={i}>⭐</p>))}

                </div>
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
