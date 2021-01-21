import * as Types from '../constants/ActionTypes'

const initialState = []

const rating = (state = initialState, action) => {
    let { dbRating,dataRating} = action
    switch (action.type) {
        case Types.RATING_PRODUCT:
            state.push(dbRating)
            return [...state]
        case Types.FETCH_PRODUCT_RATING:
            state = dataRating
            return [...state]
        default: 
            return[...state]
    }
}
export default rating