export default function productReducer(state = {products: []}, action) {

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {...state, products: [...state.products, action.payload]}
            // old version just products: action.payload
        case 'ADD_PRODUCT':
            return {...state, products: [...state.products, action.payload]}
        default:
            return state
    }
}