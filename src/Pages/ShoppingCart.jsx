import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCard from '../Components/ShoppingCard';

class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quantity: 1,
  //   };
  // }

  // IncrementItem = () => {
  //   const NINE = 9;
  //   this.setState((prevState) => {
  //     if (prevState.quantity < NINE) {
  //       return {
  //         quantity: prevState.quantity + 1,
  //       };
  //     }
  //     return null;
  //   });
  // }

  // DecreaseItem = () => {
  //   this.setState((prevState) => {
  //     if (prevState.quantity > 0) {
  //       return {
  //         quantity: prevState.quantity - 1,
  //       };
  //     }
  //     return null;
  //   });
  // }

  // handleChange = (event) => {
  //   console.log(event);
  //   const {
  //     id,
  //     value,
  //   } = event;
  //   this.setState({
  //     [id]: value,
  //   });
  // }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    const { productsOnCart } = this.props;
    // console.log(productsOnCart);
    const emptyCart = productsOnCart.length === 0;
    // const {
    //   quantity,
    // } = this.state;

    return (
      <div>
        {emptyCart ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <div>
            <div data-testid="shopping-cart-empty-message">
              {productsOnCart.map((product) => (
                <div
                  key={ product.id }
                >
                  <p
                    data-testid="shopping-cart-product-name"
                  >
                    {product.title}
                  </p>
                  <div>
                    <ShoppingCard
                      productArr={ productsOnCart }
                      productID={ product }
                    />
                    {/* <button
                      data-testid="product-increase-quantity"
                      onClick={ this.IncrementItem }
                      type="button"
                    >
                      +mais
                    </button>
                    <input
                      data-testid="shopping-cart-product-quantity"
                      value={ quantity }
                      onChange={ this.handleChange }
                    />
                    <button
                      data-testid="product-decrease-quantity"
                      onClick={ this.DecreaseItem }
                      type="button"
                    >
                      -menos
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
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
