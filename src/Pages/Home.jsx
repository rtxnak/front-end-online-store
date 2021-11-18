import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
          />
          <Link
            to="/shoppingcart"
            data-testid="shopping-cart-button"
          >
            <h1>Carrinho</h1>
          </Link>
        </div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

      </div>
    );
  }
}

export default Home;
