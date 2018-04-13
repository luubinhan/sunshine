import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

import {Price} from '../mystyle'

import './Product.scss'

class Product extends Component {
  render() {
    const {
      title,
      path,
      img,
      ...attributes
    } = this.props;
    let {price, salePrice} = this.props;
    const currentPrice = salePrice || price;
    if (salePrice !== '') {
      salePrice = parseInt(salePrice, 10);
    }
    price = parseInt(price, 10);

    // caculate percent
    const downPrice = Math.round((salePrice / price) * 100);
    return (
      <div className="product">
        <div className="product-inner">
          { salePrice &&
          <span className="onsale">Giảm giá</span>
          }
          { img &&
            <span className="product-image">
              <GatsbyLink to={path}>
                <img src={img} alt={title} />
              </GatsbyLink>
            </span>
          }
          <div className="p-2">
            <h3><GatsbyLink to={path}>{title}</GatsbyLink></h3>
          </div>
          <span className="price-block">
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
