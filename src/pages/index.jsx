import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import _ from 'lodash';

import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import {PRIMARY_NAVIGATION} from '../../data/data';
import ProductListing from '../components/ProductListing';

import {
  Container,
  Section,
  HEADLINE,
  DISPLAY2,
  Row,
  Col
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
        <Section className="home-hero">
          <Container>
            <Section.Header>
              <DISPLAY2>BUY DIRECTLY FROM THE WORLD'S MOST AWESOME INDIE BRANDS</DISPLAY2>
            </Section.Header>
            <Section.Body>
              <Row>
                <Col sm="6">
                  <div className="mb-2"><img src="https://dpegb9ebondhq.cloudfront.net/storenvy_features/features/8/original/SE-20180105-FeaturedJellyBones_HomepageB.jpg" alt=""/></div>
                  <div><img src="https://d1nr5wevwcuzuv.cloudfront.net/storenvy_features/features/11/original/SE-20180108_FeaturedCollection-cold_HomepageB.gif" alt=""/></div>
                </Col>
                <Col sm="3">
                  <img src="https://d2a2wjuuf1c30f.cloudfront.net/storenvy_features/features/14/original/Top100under20_586x576.jpg" alt=""/>
                  <img src="https://d2a2wjuuf1c30f.cloudfront.net/storenvy_features/features/17/original/OtherEnvy.png" alt=""/>
                </Col>
                <Col sm="3">
                  <img src="https://d310a9hpolx59w.cloudfront.net/storenvy_features/features/20/original/SE-midwinterSale_homepageC.jpg" alt=""/>
                </Col>
              </Row>
            </Section.Body>
          </Container>
        </Section>
        <Section className="gray-bg">
          <Section.Header>
            <HEADLINE>Khuyến mãi</HEADLINE>
          </Section.Header>
          <Section.Body>
            <Container>
              <ProductListing postEdges={beTraiPosts} />
            </Container>
          </Section.Body>
        </Section>
        <Section>
          <Section.Header>
            <HEADLINE>Bé Trai</HEADLINE>
            <div className="link-list">
              {
                PRIMARY_NAVIGATION[0].childrens.map((nav, index) => {
                  return (
                    <GatsbyLink key={index} to={nav.href}>{nav.name}</GatsbyLink>
                  )
                })
              }
              <GatsbyLink to="/categories/be-trai"><b>Tất cả</b></GatsbyLink>
            </div>
          </Section.Header>
          <Section.Body>
            <Container>
              <ProductListing postEdges={beTraiPosts} />
            </Container>
          </Section.Body>
        </Section>
        <Section className="gray-bg">
          <Section.Header>
            <HEADLINE>Bé Gái</HEADLINE>
            <div className="link-list">
              {
                PRIMARY_NAVIGATION[1].childrens.map((nav, index) => {
                  return (
                    <GatsbyLink key={index} to={nav.href}>{nav.name}</GatsbyLink>

                  )
                })
              }
              <GatsbyLink to="/categories/be-gai"><b>Tất cả</b></GatsbyLink>
            </div>
          </Section.Header>
          <Section.Body>
            <Container>
              <ProductListing postEdges={beGaiPosts} />
            </Container>
          </Section.Body>
        </Section>
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
