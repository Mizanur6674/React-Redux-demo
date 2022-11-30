
import { combineReducers } from 'redux'
import CakeReducer from './cake/CakeReducer'
import IceCreamReducer from './iceCream/iceCreamReducer'

const RootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})
export default RootReducer