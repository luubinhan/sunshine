import React from 'react'
import PropTypes from 'prop-types'

import './Price.css'

const PriceProps = {
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string
}
const PriceDefaultProps = {
  symbol: 'đ'
}

const Price = ({price, symbol}) => (
  <span className="price-amount">
    <span className="amount">
      {price.toLocaleString(price, 'vi-VN')}
    </span>
    <span className="price-currency-symbol">{symbol}</span>
  </span>
)
Price.propTypes = PriceProps;
Price.defaultProps = PriceDefaultProps;

export default Price
