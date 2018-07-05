import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import {PRIMARY_NAVIGATION, CATE_BE_GAI, CATE_BE_TRAI} from '../../data/data';
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
              <img className="object-fit" src="https://cf.shopee.vn/file/97aef1a578c940eb70697dae3817b9f7" alt="chair" />
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
                <img className="object-fit" src="https://cf.shopee.vn/file/ef0ee383a12628e7c5a17a63833e2581" alt="ShopMatTroiNho.com - Shop chuyên bán quần áo trẻ em" />
              </div>
            </div>
            <div className="third-feature">
              <div className="grid-feature-1">
                <div className="text-holder">
                  <GatsbyLink className="btn btn-warning btn-sm" to="/categories/be-gai">
                    Dành cho Bé Gái
                  </GatsbyLink>
                </div>
                <img className="object-fit" src="https://cf.shopee.vn/file/cf392d06010cd98f20bb5a21100f395e" alt="ShopMatTroiNho.com - Shop chuyên bán quần áo trẻ em" />

              </div>
              <div className="grid-feature-2">
                <div className="text-holder">
                  Và rất nhiều sản phẩm khác cho bé
                </div>
              </div>
              <div className="grid-feature-3">
                <div className="text-holder">
                  <GatsbyLink className="btn btn-primary btn-sm" to="/categories/be-trai">
                    Dành cho Bé Trai
                  </GatsbyLink>
                </div>
                <img className="object-fit" src="https://cf.shopee.vn/file/67390656d17a5e3890da07fc7df52f47" alt="ShopMatTroiNho.com - Shop chuyên bán quần áo trẻ em" />
              </div>
            </div>
          </div>
        </div>

        <Section className="pink-bg">
          <Section.Header>
            <div className="h2"><GatsbyLink to="/categories/be-gai">Bé Gái</GatsbyLink></div>
            <div className="link-list">
              {
                CATE_BE_GAI.map((nav) => (
                  <GatsbyLink key={nav.key} to={`/categories/be-gai?tags=${nav.key}`}>{nav.name}</GatsbyLink>
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
        <Section className="gray-bg">
          <Section.Header>
            <div className="h2"><GatsbyLink to="/categories/be-trai">Bé Trai</GatsbyLink></div>
            <div className="link-list">
              {
                CATE_BE_TRAI.map((nav) => (
                  <GatsbyLink key={nav.key} to={`/categories/be-trai?tags=${nav.key}`}>{nav.name}</GatsbyLink>
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
      limit: 6
      filter: {frontmatter: {category: {eq: "be-trai"}}}
      sort: {fields: [frontmatter___date], order: ASC}
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
      limit: 6
      filter: {frontmatter: {category: {eq: "be-gai"}}}
      sort: {fields: [frontmatter___date], order: ASC}
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
