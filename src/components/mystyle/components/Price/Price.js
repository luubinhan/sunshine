import React from 'react'
import PropTypes from 'prop-types'

import './Price.css'

const PriceProps = {
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  salePrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  symbol: PropTypes.string
}
const PriceDefaultProps = {
  symbol: 'đ',
  salePrice: 0
}

const Price = ({price, symbol, salePrice}) => {
  const currentPrice = salePrice ? parseInt(salePrice, 10) : parseInt(price, 10);
  let downPrice = 0;
  if (salePrice) {
    salePrice = parseInt(salePrice, 10);
    price = parseInt(price, 10);
    // caculate percent
    downPrice = Math.round((salePrice / price) * 100);
  } 
  
  return (
    <span className="price-amount">
      {salePrice ?
        <del>
          <Price price={price} />
        </del>
        : null
      }
      <span className="amount">
        {currentPrice.toLocaleString(currentPrice, 'vi-VN')}
      </span>
      <span className="price-currency-symbol">{symbol}</span>
      { salePrice ?
        <span className="sale-tag sale-tag-square">-{downPrice}%</span>
        : null
      }
    </span>
  )
}
Price.propTypes = PriceProps;
Price.defaultProps = PriceDefaultProps;

export default Price
