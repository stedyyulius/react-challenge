import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import '../App.css'

import {changeCards} from '../actions/index.js'

const Search = (props)=>{  
    return(
      <div className='title'>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Basic`)}>Basic</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Blackrock Mountain`)}>Blackrock Mountain</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Classic`)}>Classic</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Journey to Un'Goro`)}>Journey to UnGoro</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Goblin vs Gnomes`)}>Goblin vs Gnomes</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Mean Streets of Gadgetzan`)}>Mean Streets of Gadgetzan</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Naxxramas`)}>Naxxramas</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`One Night in Karazhan`)}>One Night in Karazhan</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`The Grand Tournament`)}>The Grand Tournament</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`The League of Explorers`)}>The League of Explorers</button></Link>
        <Link to="/list" ><button onClick={() =>props.getAllCards(`Whispers of the Old Gods`)}>Whispers of the Old Gods</button></Link>
      </div>
    )
}

const mapStateToProps = (state) =>{
  return{
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCards: (expansion) => dispatch(changeCards(expansion))
  }
}  
  
export default connect(mapStateToProps,mapDispatchToProps)(Search)