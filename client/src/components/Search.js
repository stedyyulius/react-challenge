import React,{Component} from 'react'
import {Link} from 'react-router-dom'


import '../App.css'


class Search extends Component{
  constructor(props){
    super(props)
    this.state={
      currentcards:""
    }
  }
  render(){
    return(
      <div className='title'>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Basic`)}>Basic</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Blackrock Mountain`)}>Blackrock Mountain</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Classic`)}>Classic</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Journey to Un'Goro`)}>Journey to UnGoro</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Goblin vs Gnomes`)}>Goblin vs Gnomes</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Mean Streets of Gadgetzan`)}>Mean Streets of Gadgetzan</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Naxxramas`)}>Naxxramas</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`One Night in Karazhan`)}>One Night in Karazhan</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`The Grand Tournament`)}>The Grand Tournament</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`The League of Explorers`)}>The League of Explorers</button></Link>
      <Link to="/list" ><button onClick={this.props.getAllCards(`Whisper of the Old Gods`)}>Whisper of the Old Gods</button></Link>
      </div>
    )
  }
}  
  


export default Search