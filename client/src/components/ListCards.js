import React, {Component} from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
 

import '../App.css'

import Cards from './Cards.js'

class ListCards extends Component{ 
  render(){
    return(
  <div className='container'>
    <Link to="/"><button className="btn btn-danger">Cancel</button> </Link>
    <ul className="listWrapper">
      { this.props.cards.map((card,index) => (
      <Cards
      key={index} 
      card={card}
      />
      ))}
    </ul>
  </div>
    )
  }
}

export default ListCards