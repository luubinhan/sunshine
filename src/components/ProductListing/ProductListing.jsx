import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash'

import NoProduct from '../NoProduct'
import Product from '../Product'

class ProductListing extends React.Component {
  state = {
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
        price: postEdge.node.frontmatter.price,
        salePrice: postEdge.node.frontmatter.salePrice,
      });
    });
    return postList;
  }
  _changeSelected = (e, post) => {
    this.setState({
      showModal: true
    })
  }
  _toggleModal = e => this.setState({showModal: !this.state.showModal})
  render() {
    const postList = this.getPostList();
    return (
      <div className="mystyle-products">
        {postList.length === 0 ?
          <NoProduct />
          :
          postList.map((post, index) => (
            <Product
              key={index}
              title={post.title}
              img={post.cover}
              {...post}
            />
          ))
        }
      </div>
    );
  }
}

export default ProductListing;
