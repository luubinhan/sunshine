import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'react-slick';
import _ from 'lodash';

import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import {PRIMARY_NAVIGATION} from '../../data/data';
import ProductListing from '../components/ProductListing';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  arrows: true,
}
import {
  Product,
  Row, Col, Widget, Container,
  SUBHEADING, CAPTION, HEADLINE
} from '../components/mystyle'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const beTraiPosts = this.props.data.beTraiPosts.edges;
    const beGaiPosts = this.props.data.beGaiPosts.edges;

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Container>
          <div className="box">
            <div className="box-header">
              Khuyến mãi
            </div>
            <div className="box-body">
              <ProductListing postEdges={beTraiPosts} />
            </div>
          </div>
          <div className="box box-be-trai">
            <div className="box-header">
              <div className="header-left">
                <div className="box-name">
                    Bé Trai
                </div>
              </div>
              <div className="header-right">
                <div className="link-list">
                  {
                    PRIMARY_NAVIGATION[0].childrens.map((nav, index) => {
                      return (
                        <GatsbyLink key={index} to={nav.href}>{nav.name}</GatsbyLink>
                      )
                    })
                  }
                  <GatsbyLink to="/tags/be-trai"><b>Tất cả</b></GatsbyLink>
                </div>
              </div>
            </div>
            <div className="box-body">
              <ProductListing postEdges={beTraiPosts} />

            </div>
          </div>
          <div className="box box-be-gai">
            <div className="box-header">
              <div className="header-left">
                <div className="box-name">
                    Bé Gái
                </div>
              </div>
              <div className="header-right">
                <div className="link-list">
                  {
                    PRIMARY_NAVIGATION[1].childrens.map((nav, index) => {
                      return (
                        <GatsbyLink key={index} to={nav.href}>{nav.name}</GatsbyLink>

                      )
                    })
                  }
                  <GatsbyLink to="/tags/be-gai"><b>Tất cả</b></GatsbyLink>
                </div>
              </div>
            </div>
            <div className="box-body">
              <ProductListing postEdges={beGaiPosts} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            price
            salePrice
          }
        }
      }
    }
    beTraiPosts: allMarkdownRemark(
      limit: 8
      filter: {frontmatter: {category: {eq: "be-trai"}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover
            date
            category
            price
            salePrice
          }
        }
      }
    }
    beGaiPosts: allMarkdownRemark(
      limit: 20
      filter: {frontmatter: {category: {eq: "be-gai"}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover
            date
            category
            price
            salePrice
          }
        }
      }
    }
  }
`;
