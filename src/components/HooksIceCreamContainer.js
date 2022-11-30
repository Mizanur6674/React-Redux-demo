import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream} from '../redux'


function HooksIceCreamContainer() {
    const numOfIceCream= useSelector(state => state.iceCream.numOfIceCream)
    const dispatch= useDispatch()
  return (
    <div>
        <h1>Number Of Icecream-{numOfIceCream}</h1>
        <button onClick={ () => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer