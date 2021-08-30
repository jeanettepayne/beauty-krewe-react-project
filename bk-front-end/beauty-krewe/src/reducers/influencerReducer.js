export default function influencerReducer(state = {influencers: []}, action) {

    switch (action.type) {
        case 'FETCH_INFLUENCERS':
            return {influencers: action.payload}
        default:
            return state
    }
}