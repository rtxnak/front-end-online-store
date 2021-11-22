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
      productsOnCart: [],
    };
  }

  componentDidMount() {
    this.getCategoriesFunction();
  }

  buyOnClick = (item) => {
    this.setState((prevState) => ({
      productsOnCart: [...prevState.productsOnCart, item],
    }));
  }

  handlechangeSearch = ({ target }) => {
    this.setState({ searchProducts: target.value });
    // console.log(target.value);
  }

  handleClickCategorie = async (id) => {
    const { searchProducts } = this.state;
    // console.log(searchProducts);
    const searchResult = await api
      .getProductsFromCategoryAndQuery(id, searchProducts);
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
    // console.log(this.props);
    const {
      allCategories,
      products,
      onLoad,
      productsOnCart,
    } = this.state;

    // const {
    //   productsOnCart,
    // } = this.props;
    console.log(productsOnCart);

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
              data-testid="shopping-cart-button"
              to={ {
                pathname: '/shoppingcart',
                state: { productsOnCart },
              } }
            >
              <h1>carrinho</h1>
            </Link>
          </div>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <div>
            {/* { console.log(products.results) } */}
            { onLoad ? empty : products.results.map((product) => (
              <>
                <Link
                  data-testid="product-detail-link"
                  key={ product.id }
                  to={ {
                    pathname: `/productsdetails/${product.id}`,
                    state: { product },
                  } }
                >
                  <CardP
                    arrProduct={ product }
                  />
                </Link>
                <button
                  data-testid="product-add-to-cart"
                  onClick={ () => { this.buyOnClick(product); } }
                  type="button"
                >
                  Comprar
                </button>
              </>
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
