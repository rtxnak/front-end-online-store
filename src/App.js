import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductsDetails';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={ (props) => <Home { ...props } /> }
        // component={ Home }
      />
      <Route exact path="/shoppingcart" component={ ShoppingCart } />
      <Route
        exact
        path="/productsdetails/:id"
        component={ ProductDetails }
        // render={ (props) => <ProductDetails { ...props } /> }
      />
    </BrowserRouter>
  );
}

export default App;
