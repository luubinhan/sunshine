import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Price} from '../mystyle'

import './Product.css'

class Product extends Component {
  render() {
    const {
      title,
      path,
      img,
      ...attributes
    } = this.props;
    let {price, salePrice} = this.props;
    const currentPrice = salePrice ? salePrice : price;
    if (salePrice !== '') {
      salePrice = parseInt(salePrice, 10);
    }    
    price = parseInt(price, 10);
    
    // caculate percent
    const downPrice = Math.round((salePrice / price) * 100);
    return (
      <div className="product" {...attributes}>
        <div className="product-inner">
          <div>
            { salePrice &&
            <span className="onsale">Giảm giá</span>
            }
            { img &&
              <span className="product-image">
                <img src={img} alt={title} />
              </span>
            }
            <h3>{title}</h3>
            <span className="price">
              {salePrice &&
                <del>
                  <Price price={price} />
                </del>
              }
              <ins><Price price={parseInt(currentPrice, 10)} /></ins>
              { salePrice &&
                <span className="sale-tag sale-tag-square">-{downPrice}%</span>
              }
            </span>
          </div>
          <a className="button add_to_cart_button product_type_simple" rel="nofollow" href="">Mua ngay</a>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.string,
  salePrice: PropTypes.string,
};

Product.defaultProps = {
  img: '',
  price: '',
  salePrice: ''
}

export default Product;
