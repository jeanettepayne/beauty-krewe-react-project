export default function influencersProductReducer(state = {influencersProducts: []}, action) {

    switch (action.type) {
        case 'FETCH_INFLUENCERS_PRODUCTS':
            return {...state, influencersProducts: [...state.influencersProducts, action.payload]}
            // old version just products: action.payload
        case 'ADD_INFLUENCERS_PRODUCT':
            return {...state, influencersProducts: [...state.influencersProducts, action.payload]}
        default:
            return state
    }
}