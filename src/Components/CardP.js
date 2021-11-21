import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardP extends Component {
  render() {
    const { arrProduct } = this.props;
    const { id, title, thumbnail, price } = arrProduct;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/productsdetails/${id}`,
            state: { arrProduct },
          } }
        >
          <span>
            { title }
          </span>
          <img
            src={ thumbnail }
            alt={ title }
            width="30px"
          />
          <span>
            { price }
          </span>
        </Link>
      </div>
    );
  }
}

CardP.propTypes = {
  arrProduct: PropTypes.shape().isRequired,
};

export default CardP;

// transferir informação por rota dinamica =>https://www.youtube.com/watch?v=RUFxmAjbNbg
