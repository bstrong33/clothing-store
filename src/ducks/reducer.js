const initialState = {
    cart: {}
}

const UPDATE_CART = 'UPDATE_CART'

export function updateCart(cart) {
    return {
        type: UPDATE_CART,
        payload: cart
    }
}

export default function reducer (state=initialState, action) {
    switch(action.type) {
        case UPDATE_CART:
            return {...state, name: action.payload}

    default:
        return state;
    }
}