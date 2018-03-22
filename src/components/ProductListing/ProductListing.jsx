import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash'

import {
  Modal,
  Button
} from '../mystyle'

import ProductContent from '../ProductContent'
import Product from '../Product'

class ProductListing extends React.Component {
  state = {
    selectedProduct: null,
    showModal: false,
  }
  // TRANSFORM DATA
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        price: postEdge.node.frontmatter.price,
        salePrice: postEdge.node.frontmatter.salePrice,
      });
    });
    return postList;
  }
  _changeSelected = (e, post) => {
    this.setState({
      selectedProduct: post,
      showModal: true
    })
  }
  _toggleModal = e => this.setState({showModal: !this.state.showModal})
  render() {
    const postList = this.getPostList();
    return (
      <div className="mystyle-products">
        <Modal isOpen={this.state.showModal} size="lg" toggle={this._toggleModal}>
          <Modal.Header toggle={this._toggleModal}>
            {this.state.selectedProduct && this.state.selectedProduct.title}
          </Modal.Header>
          <Modal.Body>
            <ProductContent post={this.state.selectedProduct} />
          </Modal.Body>
          <Modal.Footer>
            <Button primary size="lg">Mua Ngay</Button>
          </Modal.Footer>
        </Modal>
        {postList.map(post => (
          <Product
            key={post.title}
            title={post.title}
            img={post.cover}
            {...post}
          />
        ))}
      </div>
    );
  }
}

export default ProductListing;
