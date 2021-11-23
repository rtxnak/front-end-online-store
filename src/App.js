import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductsDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsOnCart: [],
    };
  }

  buyOnClick = (item) => {
    this.setState((prevState) => ({
      productsOnCart: [...prevState.productsOnCart, item],
    }));
  }

  render() {
    const {
      productsOnCart,
    } = this.state;
    const { buyOnClick } = this;

    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={
              () => (<Home
                buyOnClick={ buyOnClick }
              />)
            }
          />
          <Route
            exact
            path="/shoppingcart"
            render={
              () => (<ShoppingCart
                productsOnCart={ productsOnCart }
              />)
            }
          />
          <Route
            exact
            path="/productsdetails/:id"
            render={
              (props) => (<ProductDetails
                buyOnClick={ buyOnClick }
                { ...props }
              />)
            }
            // component={ ProductDetails }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
