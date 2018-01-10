import React from "react";
import Link from "gatsby-link";

import {Product} from '../mystyle'

class ProductListing extends React.Component {
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
  render() {
    const postList = this.getPostList();
    return (
      <div className="mystyle-products">
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
