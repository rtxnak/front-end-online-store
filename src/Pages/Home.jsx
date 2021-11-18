import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesFunction();
  }

  getCategoriesFunction = async () => {
    const getCategories = await api.getCategories();
    this.setState({
      allCategories: getCategories,
    });
  }

  render() {
    const { allCategories } = this.state;
    return (
      <div>
        <div>
          <div>
            <input
              type="text"
            />
            <Link
              to="/shoppingcart"
              data-testid="shopping-cart-button"
            >
              <h1>carrinho</h1>
            </Link>
          </div>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </div>
        <div>
          {allCategories.map((Categorie) => (
            <button
              data-testid="category"
              type="button"
              key={ Categorie.id }
            >
              { Categorie.name }
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
