import React from 'react';
import Helmet from 'react-helmet';

import {Container, Price} from '../components/mystyle'

import UserInfo from '../components/UserInfo/UserInfo';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

import '../scss/single-product.scss';

import {getCategoryName} from '../Utils'

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="single-product">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Container>
          <div className="product type-product has-post-thumbnail">
            <div className="images">
              <a href={post.title} className="woocommerce-main-image">
                <img src={post.cover} className="attachment-shop_single size-shop_single wp-post-image" alt={post.title} />
              </a>
            </div>

            <div className="summary entry-summary">
              <h1 className="product_title entry-title">{post.title}</h1>
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
            </div>
            <div className="woocommerce-tabs wc-tabs-wrapper">
              <div className="p-30">
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        thumb1
        thumb2
        thumb3
        thumb4
        mau
        sizes
        date
        category
        tags
        price
        salePrice
      }
      fields {
        slug
      }
    }
  }
`;
