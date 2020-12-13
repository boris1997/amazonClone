import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user, totalAmount }, dispatch] = useStateValue();
    console.log(totalAmount)
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Cart {totalAmount === false && <span>is empty</span>} </h2>
                    {basket.map((item, i) => (
                        <CheckoutProduct
                            key={i}
                            i={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            amount={item.amount}
                        />

                    )

                    )

                    }
                </div>
            </div>
            {totalAmount > 0 &&
                <div className="checkout__right">
                    <Subtotal />
                </div>
            }
        </div>

    )
}

export default Checkout
