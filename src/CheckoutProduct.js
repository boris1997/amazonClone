import React, { useEffect, useRef, useState } from 'react'
import './CheckoutProduct.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
/* import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */
import { useStateValue } from './StateProvider';

function CheckoutProduct({ i, id, image, title, price, rating, amount, hideButton }) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const list = useRef();
    const CurrentAmount = useRef();
    const [active, setActive] = useState()
    console.log(active)
    console.log(list)
    /* console.log(active) */
    /* active.classList.remove('visible') */
    const [{ basket }, dispatch] = useStateValue();
    const removeList = (e) => {
        /* e.preventDefault() */
        /*         console.log(list.current)
         */
        /*   console.log(e.target) */
        if (e.target.classList[0] === 'checkoutProduct__listItem' || (e.target.classList[0] != 'checkoutProduct__listItem' && e.target.classList[0] != 'checkoutProduct__changeAmount' && e.target.classList[0] != 'checkoutProduct__CurrentAmount' && e.target.classList[0] != 'checkoutProduct__Qty' && e.target.classList[3] != 'checkoutProduct__icon')) {
            /* list.current && */ list.current?.classList.remove('visible')
        }

    }

    const manipulateItem = (e) => {
        /* renderCount.current = renderCount.current +1; */
        amount = parseFloat(e.target.textContent);
        /*    console.log(CurrentAmount.current) */
        CurrentAmount.current.textContent = amount;
        /*   console.log(CurrentAmount.current)
          console.log(CurrentAmount) */

        basket.map(item => item.id === id && (item.amount = amount))

        dispatch({
            type: 'UPDATE_BASKET',
            basket: basket
        }
        )
        dispatch({
            type: 'GET_TOTAL_AMOUNT',
            basket: basket
        }
        )

        /*   console.log(basket) */
    }

    /*  return () => {
         document.removeEventListener('click', removeList);
     }; */


    const removeFromBasket = () => {
        console.log(id)
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            i: i
        })
        dispatch({
            type: 'GET_TOTAL_AMOUNT',
            basket: basket
        }
        )
    }



    const showList = () => {
        /* ReactDOM.findDOMNode */
        console.log(list.current)
        const visible = document.querySelector('.visible')
        visible != null && visible.classList.remove('visible')
        document.addEventListener('click', removeList)
        list.current.classList.add('visible')
    }
    return (

        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <div className="checkoutProduct__manipulation">
                    <div ref={list} className="checkoutProduct__list">
                        {numbers.map(item => (
                            <li className='checkoutProduct__listItem' onClick={manipulateItem}>{item} </li>
                        ))}
                    </div>
                    <div onClick={showList} className="checkoutProduct__changeAmount">
                        {/*  <FontAwesomeIcon icon={faHome} /> */}
                        <span className="checkoutProduct__Qty">Qty:</span>
                        <span ref={CurrentAmount} className="checkoutProduct__CurrentAmount">{amount}</span>
                        <FontAwesomeIcon className='checkoutProduct__icon' icon={faChevronDown} />
                    </div>
                    <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
