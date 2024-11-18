import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";
import { addToCartLogic, deleteAllFromCart, deleteOneFromCart } from "./logicShopping/logicShoppingCart";

const initialState = {
    products: [
        { id: 1, name: "Producto1", price: 100 },
        { id: 2, name: "Producto2", price: 200 },
        { id: 3, name: "Producto3", price: 300 },
        { id: 4, name: "Producto4", price: 400 },
        { id: 5, name: "Producto5", price: 500 },
        { id: 6, name: "Producto6", price: 600 },
        { id: 7, name: "Producto7", price: 700 }
    ],
    cart: []
}

export default function shoppingReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCartLogic(state, action.payload)
        case REMOVE_ONE_FROM_CART:
            return deleteOneFromCart(state, action.payload)
        case REMOVE_ALL_FROM_CART:
            return deleteAllFromCart(state, action.payload)
        case CLEAR_CART:
            return {
                ...state,
                cart: [] 
            };
        default:
            return state;
    }
}


