import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class CardP extends Component {
  render() {
    // console.log(this.props);
    const {
      arrProduct,
    } = this.props;
    const { title, thumbnail, price } = arrProduct;

    return (
      <div data-testid="product">
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
      </div>
    );
  }
}

CardP.propTypes = {
  arrProduct: PropTypes.shape().isRequired,
};

export default CardP;

// transferir informação por rota dinamica =>https://www.youtube.com/watch?v=RUFxmAjbNbg
// Linha de correcao para pull request;
