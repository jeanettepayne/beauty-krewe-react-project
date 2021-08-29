export default function brandReducer(state = {brands: []}, action) {

    switch (action.type) {
        case 'FETCH_BRANDS':
            return {brands: action.payload}
        default:
            return state
    }
}