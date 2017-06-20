import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import Title from './components/Title.js'
import Search from './components/Search.js'
import ListCards from './components/ListCards'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      cards: []
    }
  }
  render() {
    return (
      <div>
        <Title />
        <Search 
        cards={this.state.cards} 
        getAllCards={this.getAllCards.bind(this)} 
        getCardsByType={this.getCardsByType} />
        <ListCards cards={this.state.cards} />
      </div>
    );
  }
  
  getAllCards(){
    axios.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards",{
    headers:{"X-Mashape-Key":"sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8"}})
    .then(response=>{
      console.log(response.data);
      this.state.cards = response.data["Journey to Un'Goro"]
      this.setState({
        cards: this.state.cards
      })
        //console.log(JSON.stringify(this.state.cards));
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  getCardsByType(type){
    axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/${type}`,{
      headers:{"X-Mashape-Key":"sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8"}})
      .then(response=>{
        this.state.cards = response.data
        this.setState({
          cards: this.state.cards
        })
      })
    .catch(err=>{
      console.log(err);
    })
  }
}
   

export default App;
