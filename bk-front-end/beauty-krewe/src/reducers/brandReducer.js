export default function brandReducer(state = {brands: []}, action) {

    switch (action.type) {
        case 'FETCH_BRANDS':
            return {...state, brands: [...state.brands, action.payload]}
        case 'FETCH_BRANDS_API':
            return {...state, brands: [...state.brands, action.payload]}
        default:
            return state
    }
}