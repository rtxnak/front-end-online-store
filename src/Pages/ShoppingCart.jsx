import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    // console.log(this.props);
    const { productsOnCart } = this.props;
    // { } = productsOnCart
    console.log(productsOnCart);
    const emptyCart = productsOnCart.length === 0;

    return (
      <div>
        {emptyCart ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <div>
            <p data-testid="shopping-cart-empty-message">
              {productsOnCart.map((product) => (
                <div
                  key={ product.id }
                >
                  <p
                    data-testid="shopping-cart-product-name"
                  >
                    {product.title}
                  </p>
                  <span
                    data-testid="shopping-cart-product-quantity"
                  >
                    {1}
                  </span>
                </div>
              ))}
            </p>
          </div>
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  productsOnCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
