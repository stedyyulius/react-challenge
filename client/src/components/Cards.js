import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import '../App.css'

import {getSingleCard} from '../actions/index.js'

class Cards extends Component{
  render(){
    return(
      <div className="services">
        <div className="col-md-4">
          <Link 
            to= {`/card/${this.props.card.cardId}`}
            onClick={()=>this.props.getSingleCard(this.props.card.cardId)}>
            <figure className="snip1174 navy col-md-4">
            <img src={this.props.card.imgGold} alt="card" />
            <figcaption>
              <p>{this.props.card.cardId}</p>
            </figcaption>
          </figure>
         </Link>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getSingleCard: (id) => dispatch(getSingleCard(id))
    }
  }  

export default connect(null,mapDispatchToProps)(Cards)