import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductsDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shoppingcart" component={ ShoppingCart } />
      <Route
        exact
        path="/productsdetails/:id"
        render={ (props) => <ProductDetails { ...props } /> }
        // render={
        //   () => (<ProductDetails
        //   />)
        // }
      />
    </BrowserRouter>
  );
}

export default App;
