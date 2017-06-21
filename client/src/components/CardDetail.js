import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import '../App.css'

import {clearCards} from '../actions/index.js'

const CardDetail = (props)=>{
    return(
    <div className ="container">
      <div className="services">
        <div className="details">
        <Link 
          to="/" 
          onClick={()=> props.clearCards()}>
          <button className="btn btn-danger">Back</button>
        </Link>
        {(props.card.length === 0)
          ? <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" 
            alt="loading"
            className="loading"
            />
          :<div> 
          <img src={props.card.imgGold} alt="card" />
              <h2>{props.card.name}</h2>
              <h3>
                {props.card.artist}
              </h3>
            </div>
          }
          </div>
        </div>  
      </div>
    )
  }

const mapStateToProps = (state) =>{
  return {
    card:state.card
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    clearCards: () => dispatch(clearCards())
  }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(CardDetail)