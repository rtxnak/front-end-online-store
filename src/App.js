import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
