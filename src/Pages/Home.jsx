import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CardP from '../Components/CardP';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
      searchProducts: '',
      products: [],
      onLoad: true,
    };
  }

  componentDidMount() {
    this.getCategoriesFunction();
  }

  handlechangeSearch = ({ target }) => {
    this.setState({ searchProducts: target.value });
    // console.log(target.value);
  }

  handleClickCategorie = async (random) => {
    const { searchProducts } = this.state;
    // console.log(searchProducts);
    const searchResult = await api
      .getProductsFromCategoryAndQuery(random, searchProducts);
    this.setState({
      products: searchResult,
      onLoad: false,
    });
  }

  handleClickSearch = async () => {
    const { searchProducts } = this.state;
    // console.log(searchProducts);
    const searchResult = await api.getProductsFromCategoryAndQuery('', searchProducts);
    this.setState({
      products: searchResult,
      onLoad: false,
    });
    // console.log(result);
  }

  getCategoriesFunction = async () => {
    const getCategories = await api.getCategories();
    this.setState({
      allCategories: getCategories,
    });
  }

  render() {
    const {
      allCategories,
      products,
      onLoad,
    } = this.state;

    const empty = (<p>Nenhum Produto Encontrado</p>);
    const { searchProducts } = this.props;
    return (
      <div>
        <div>
          <div>
            <label htmlFor="query-input">
              Pesquisa
              <input
                type="text"
                data-testid="query-input"
                id="query-input"
                onChange={ this.handlechangeSearch }
                name="searchProducts"
                value={ searchProducts }
              />
              <button
                data-testid="query-button"
                type="button"
                onClick={ this.handleClickSearch }
              >
                Buscar
              </button>
            </label>
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
          <div>
            { console.log(products.results) }
            { onLoad ? empty : products.results.map((product) => (
              <CardP
                key={ product.id }
                arrProduct={ product }
              />
            ))}
          </div>
        </div>
        <div>
          {allCategories.map((Categorie) => (
            <button
              data-testid="category"
              type="button"
              key={ Categorie.id }
              onClick={ () => { this.handleClickCategorie(Categorie.id); } }
            >
              { Categorie.name }
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  searchProducts: PropTypes.string.isRequired,
};

export default Home;
