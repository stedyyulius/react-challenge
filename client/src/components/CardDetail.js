import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import '../App.css'

class CardDetail extends Component{
  constructor(props){
    super(props)
    this.state={
      card:""
    }
  }
  render(){
    return(
    <div className ="container">
      <div className="services">
        <div className="details">
        <Link to="/" ><button className="btn btn-danger">X</button></Link>
            <img src={this.state.card.imgGold} />
              <h2>{this.state.card.name}</h2>
              <p>
                {this.state.card.artist}
              </p>
          </div>
        </div>  
      </div>
    )
  }
  
  componentDidMount(){
    let id = this.props.match.params.id
    console.log(id);
    axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${id}`,{
      headers:{"X-Mashape-Key":"sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8"}})
      .then(response=>{
        this.state.card = response.data[0]
        this.setState({
          cards: this.state.card
        })
      })
      .catch(err=>{
        console.log(err);
      })
    }
}

export default CardDetail