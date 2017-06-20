import React, {Component} from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import '../App.css'



class Cards extends Component{
  render(){
    return(
      <div className="services">
        <div className="col-md-4">
          <Link to= {`/card/${this.props.card.cardId}`}><figure className="snip1174 navy col-md-4">
            <img src={this.props.card.imgGold} />
            <figcaption>
              <h2>{this.props.card.name}</h2>
              <p>
                {this.props.card.artist}
              </p>
            </figcaption>
          </figure></Link>
          </div>
      </div>
    )
  }
}

export default Cards