import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardP extends Component {
  render() {
    const { arrProduct } = this.props;
    return (
      <div data-testid="product">
        <span>
          { arrProduct.title }
        </span>
        <img
          src={ arrProduct.thumbnail }
          alt={ arrProduct.title }
          width="30px"
        />
        <span>
          { arrProduct.original_price }
        </span>
      </div>
    );
  }
}

CardP.propTypes = {
  arrProduct: PropTypes.shape().isRequired,
};

export default CardP;
