import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      // onLoad: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.productDetailsFetch(id);
  }

  productDetailsFetch = async (id) => {
    const searchResult = await api
      .getProductsProductByID(id);
    this.setState({
      products: searchResult,
      // onLoad: false,
    });
  }

  render() {
    console.log(this.props);
    // const { match: { params: { id } } } = this.props;
    // console.log(id);
    // const { location: { state: { product } } } = this.props;
    const {
      buyOnClick,
    } = this.props;
    const {
      products,
      // onLoad,
    } = this.state;

    const { title, thumbnail, price } = products;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingcart',
          } }
        >
          <h1>carrinho</h1>
        </Link>
        <div>
          <img
            src={ thumbnail }
            alt={ title }
          />
        </div>
        <div>
          <span data-testid="product-detail-name">
            { title }
          </span>
          <span>
            { price }
          </span>
          <span>
            { price }
          </span>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ () => { buyOnClick(products); } }
          type="button"
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  // location: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  buyOnClick: PropTypes.func.isRequired,
};

export default ProductDetails;
