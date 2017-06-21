import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store/store.js'
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
      <Provider store={store}>
      <BrowserRouter>
      <div>

        <Title />
              
      <Switch>
        
        <Route 
        exact path="/"
        component={Search}
        />    
        
        <Route
        exact path="/list"
        component= {ListCards} />}       
        />
  
        <Route 
        exact path="/card/:id" 
        component={CardDetail} 
        />
        
      </Switch>
      
      </div>
      </BrowserRouter>
    </Provider>
    );
  }

}
   

export default App;
