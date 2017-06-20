import React, {Component} from 'react'

import '../App.css'

class Cards extends Component{
  render(){
    return(
      <div className="services">
        <div className="col-md-4">
          <figure className="snip1174 navy col-md-4">
            <img src={this.props.card.img} />
            <figcaption>
              <h2>{this.props.card.name}</h2>
              <p>
                {this.props.card.artist}
              </p>
            </figcaption>
          </figure>
          </div>
      </div>
    )
  }
}

export default Cards