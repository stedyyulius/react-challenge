import React, {Component} from 'react'
import _ from 'lodash'

import '../App.css'

import Cards from './Cards.js'

class ListCards extends Component{ 
  render(){
    return(
  <div className='container'>
    <ul className="listWrapper">
      { this.props.cards.map((card,index) => (
      <Cards key={card.cardId} card={card} />
      ))}
    </ul>
  </div>
    )
  }
}

export default ListCards