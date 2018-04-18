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
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const beTraiPosts = this.props.data.beTraiPosts.edges;
    const beGaiPosts = this.props.data.beGaiPosts.edges;

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
              <img className="object-fit" src="https://images.unsplash.com/photo-1485277531869-f71504d462e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6a0444526f6da20a3492a305b19846e&auto=format&fit=crop&w=1350&q=80" alt="chair" />
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
                <img className="object-fit" src="https://images.unsplash.com/photo-1496154077138-22d8a3b92e8b" alt="" />
              </div>
            </div>
            <div className="third-feature">
              <div className="grid-feature-1">
                <div className="text-holder">
                  <Button color="primary" size="sm">Dành cho Bé Trai</Button>
                </div>
                <img className="object-fit" src="https://images.unsplash.com/photo-1503975817393-b3891b7a3b81" alt="" />
              </div>
              <div className="grid-feature-2">
                <div className="text-holder">
                  Và rất nhiều sản phẩm khác cho bé
                </div>
              </div>
              <div className="grid-feature-3">
                <div className="text-holder">
                  <Button color="secondary" size="sm">Dành cho Bé Gái</Button>
                </div>
                <img className="object-fit" src="https://images.unsplash.com/photo-1417976528056-3c9bbbb5456c" alt=""/>
              </div>
            </div>
          </div>
        </div>
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
        <Section className="pink-bg">
          <Section.Header>
            <div className="h2"><GatsbyLink to="/categories/be-gai">Bé Gái</GatsbyLink></div>
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
