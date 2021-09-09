export default function productReducer(state = {products: []}, action) {

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {...state, products: [...state.products, ...action.payload]}
            // old version just products: action.payload
        case 'FETCH_PRODUCTS_API':
            return {...state, products: [...state.products, action.payload]}
        case 'ADD_PRODUCT':
            return {...state, products: [...state.products, action.payload]}
            // return {...state, products: state.products.concat(action.payload)}
        default:
            return state
    }
}