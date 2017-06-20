import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter,Route,Switch} from 'react-router-dom'


import './App.css';

import Title from './components/Title.js'
import Search from './components/Search.js'
import ListCards from './components/ListCards'
import CardDetail from './components/CardDetail'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      cards: []
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div>

        <Title />
        
        <Search 
        cards={this.state.cards} 
        getAllCards={this.getAllCards.bind(this)} 
        />
              
      <Switch>    
        <Route
        exact path="/list"
        component={(props) => <ListCards cards={this.state.cards} {...props} />}       
        />
  
        <Route 
        exact path="/card/:id" 
        component={CardDetail} 
        />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
  getAllCards(expansion){
    axios.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards",{
    headers:{"X-Mashape-Key":"sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8"}})
    .then(response=>{
      // console.log(response.data[expansion]);
      this.state.cards = response.data[expansion]
      this.setState({
        cards: this.state.cards
      })
        console.log(JSON.stringify(response.data[expansion]));
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
   

export default App;
