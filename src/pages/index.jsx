import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import {PRIMARY_NAVIGATION} from '../../data/data';
import ProductListing from '../components/ProductListing';

import {
  Container,
  Section,
  Button
} from '../components/mystyle'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark ? this.props.data.allMarkdownRemark.edges : [];
    const beTraiPosts = this.props.data.beTraiPosts ? this.props.data.beTraiPosts.edges : [];
    const beGaiPosts = this.props.data.beGaiPosts ? this.props.data.beGaiPosts.edges : [];

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div className="awsome-features">
          <div className="grid-item--primary">
            <div className="text-holder">
              MẶT TRỜI NHỎ
            </div>
            <div className="img-holder">
              <img className="object-fit" src="https://c1.staticflickr.com/1/890/40829524224_e89b1afe9b_b.jpg" alt="chair" />
            </div>
          </div>
          <div className="second-group">
            <div className="second-feature">
              <div className="text-holder">
                <article className="article">
                  <div className="transform">Collections</div>
                  <p>Gợi ý trang phục cho mùa nắng nóng</p>
                  <Button outline color="light" size="sm">Xem Ngay</Button>
                </article>
              </div>
              <div className="img-holder">
                <img className="object-fit" src="https://c1.staticflickr.com/1/789/39732250300_9bb077a4d8_b.jpg" alt="" />
              </div>
            </div>
            <div className="third-feature">
              <div className="grid-feature-1">
                <div className="text-holder">
                  <GatsbyLink className="btn btn-primary btn-sm" to="/categories/be-trai">
                    Dành cho Bé Trai
                  </GatsbyLink>
                </div>
                <img className="object-fit" src="https://c1.staticflickr.com/1/788/27671256978_818b215e99_b.jpg" alt="" />
              </div>
              <div className="grid-feature-2">
                <div className="text-holder">
                  Và rất nhiều sản phẩm khác cho bé
                </div>
              </div>
              <div className="grid-feature-3">
                <div className="text-holder">
                  <GatsbyLink className="btn btn-secondary btn-sm" to="/categories/be-gai">
                    Dành cho Bé Gái
                  </GatsbyLink>
                </div>
                <img className="object-fit" src="https://c1.staticflickr.com/1/929/27671258418_f81769b6c1_b.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        
        <Section className="pink-bg">
          <Section.Header>
            <div className="h2"><GatsbyLink to="/categories/be-gai">Bé Gái</GatsbyLink></div>
            <div className="link-list">
              {
                PRIMARY_NAVIGATION[1].childrens.map((nav, index) => (
                  <GatsbyLink key={index} to={nav.href}>{nav.name}</GatsbyLink>
                  ))
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
        <Section className="yellow-bg">
          <Section.Header>
            <div className="h2">Khuyến mãi</div>
          </Section.Header>
          <Section.Body>
            <Container>
              <ProductListing postEdges={beTraiPosts} />
            </Container>
          </Section.Body>
        </Section>
        <Section className="gray-bg">
          <Section.Header>
            <div className="h2"><GatsbyLink to="/categories/be-trai">Bé Trai</GatsbyLink></div>
            <div className="link-list">
              {
                PRIMARY_NAVIGATION[0].childrens.map((nav, index) => (
                  <GatsbyLink key={index} to={nav.href}>{nav.name}</GatsbyLink>
                  ))
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
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
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
