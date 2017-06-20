import React,{Component} from 'react'


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
      <button onClick={this.props.getAllCards}>Get All Cards</button>
        <div className='category'>
        <form>
        <h3>Search by Name </h3>
        <input 
        type="text" 
        onChange={(e) => this.props.getCardsByType(e.target.value)}
        value={this.state.currentcards} />
        </form>
        </div>
      </div>
    )
  }
}  
  


export default Search