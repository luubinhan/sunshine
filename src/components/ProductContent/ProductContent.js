import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PostTags from '../PostTags';
import {
  Price,
  Row,
  Col,
  TITLE
} from '../mystyle'

import './ProductContent.scss'

import {getCategoryName} from '../../Utils'

class ProductContent extends Component {
  render() {
    const {
      post
    } = this.props;
    return (
      <div className="product type-product has-post-thumbnail">
        {!_.isEmpty(post) && post !== null &&
          <Row>
            <Col sm={7}>
              <a href={post.title} className="woocommerce-main-image">
                <img src={post.cover} className="attachment-shop_single size-shop_single wp-post-image" alt={post.title} />
              </a>
            </Col>
            <Col sm={5}>
              <TITLE>{post.title}</TITLE>
              <div className="category-product">
                {getCategoryName(post.category)}
              </div>
              <Price price={post.price} salePrice={post.salePrice}/>
              <div className="block-contact">
                <div className="d-flex">
                  <a className="contact-facebook" href="#">
                    <i className="ion-social-facebook" />
                    <span>Chia sẽ Facebook</span>
                  </a>
                  <a className="contact-chat" href="#">
                    <i className="ion-chatbubbles" />
                    <span>Gởi tin nhắn</span>
                  </a>
                </div>
                <div className="contact-phone">
                  <span>Gọi đặt mua</span> <a href="">0943870301</a> (9h:00 - 21:00)
                </div>
              </div>
              <div className="product_meta">
                <PostTags tags={post.tags} />
              </div>
            </Col>
          </Row>
        }
      </div>
    );
  }
}

ProductContent.propTypes = {
  post: PropTypes.object
};

ProductContent.defaultProps = {
  post: {}
}

export default ProductContent;
