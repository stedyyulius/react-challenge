import {combineReducers} from 'redux'

import cardReducers from './cardReducers.js'
import singleCardReducers from './singleCardReducers'

export default combineReducers({
  cards: cardReducers,
  card: singleCardReducers
})