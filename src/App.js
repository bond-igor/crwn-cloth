import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.components.jsx'

function App() {
  return (
  <div>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>
    </Switch>
  </div>
  )
}
  
export default App;   
