import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'

import '../App.css'

import Cards from './Cards.js'
import { clearCards } from '../actions/index.js'

const ListCards = (props) =>{ 
    return(
  <div className='container'>
    <Link to="/">
    <button 
      className="cancel btn btn-danger"
      onClick={() =>props.clearCards()}
      >
      Back
    </button> </Link>
    {(props.cards.length === 0)
      ? <img 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" 
        alt="loading"
        className="loading"
        />
      : <ul 
        className="listWrapper">
        {props.cards.map((card,index) => (
        <Cards
        key={index} 
        card={card}
        />
        ))}
       </ul>
     }
  </div>
  )
} 

const mapStateToProps = (state) =>{
  return{
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    clearCards: () => dispatch(clearCards())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListCards)