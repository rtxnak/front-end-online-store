import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    console.log(this.props);
    const { location: { state: { arrProduct } } } = this.props;
    const { title, thumbnail, price } = arrProduct;
    return (
      <div>
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
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default ProductDetails;
