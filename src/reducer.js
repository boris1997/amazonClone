export const initialState = {
    basket: [],
    user: null,
    size: { width: window.innerWidth, height: window.innerHeight },
    totalAmount: false
}

// Selector

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price * item.amount + amount, 0)

const reducer = (state, action) => {

    console.log([...state.basket])
    console.log(action.item)
    console.log(action)

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        // case 'UPDATE_BASKET_ITEM':
        //     /* console.log(action, state) */

        //     [...state.basket].map(item => item.id === action.item.id && (item.amount = action.item.amount))

        //     return {
        //         ...state,
        //         basket: state.basket /* .map(item => item.amount = action.amount) */
        //     }

        case 'UPDATE_BASKET':
            return {
                ...state,
                basket: state.basket
            }

        case 'GET_TOTAL_AMOUNT':

            let newArr = [...state.basket].length > 0 && [...state.basket].map((item) => item.amount).reduce((item, prev) => item + prev)

            return {
                ...state,
                totalAmount: newArr
            }

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter((item, i) => i !== action.i)
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'CHECK_WINDOW_SIZE':
            return {
                ...state,
                width: action.width,
                height: action.height,
            }


        // alternative way of solving problem without taking i
        // const index = state.basket.findIndex(
        //     (basketItem) => basketItem.id === action.id
        // );
        // let newBasket = [...state.basket];

        // if (index >= 0) {
        //     newBasket.splice(index, 1);

        // } else {
        //     console.warn(
        //         `Cant remove product (id: ${action.id}) as its not in basket!`
        //     )
        // }

        default:
            return state;
    }

}

export default reducer;
