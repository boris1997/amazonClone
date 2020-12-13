import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { useHistory } from "react-router-dom";
import { getBasketTotal } from './reducer';

function Subtotal() {
    const history = useHistory();
    const [{ basket, totalAmount }, dispatch] = useStateValue();



    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
              Subtotal ({totalAmount} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal


// localStorage.setItem("cart", JSON.stringify(price))