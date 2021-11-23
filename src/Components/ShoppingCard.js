import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    this.setQuatity();
  }

  setQuatity = () => {
    const { productArr, productID } = this.props;
    const quantity = productArr.filter((product) => product === productID).length;
    this.setState({
      quantity,
    });
    console.log(quantity);
  }

  IncrementItem = () => {
    const MAX = 99;
    this.setState((prevState) => {
      if (prevState.quantity < MAX) {
        return {
          quantity: prevState.quantity + 1,
        };
      }
      return null;
    });
  }

  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1,
        };
      }
      return null;
    });
  }

  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  }

  render() {
    const {
      quantity,
    } = this.state;

    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          onClick={ this.IncrementItem }
          type="button"
        >
          +mais
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </p>
        <button
          data-testid="product-decrease-quantity"
          onClick={ this.DecreaseItem }
          type="button"
        >
          -menos
        </button>
      </div>
    );
  }
}

ShoppingCard.propTypes = {
  productArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  productID: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCard;

// https://stackoverflow.com/questions/52734086/decrement-and-increment-quantity-with-reactjs
// decrement-and-increment-quantity-with-reactjs
