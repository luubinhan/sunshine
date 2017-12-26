import React from "react";
import GatsbyLink from 'gatsby-link';
import Helmet from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'react-slick';
import _ from 'lodash';

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import {PRIMARY_NAVIGATION} from "../../data/data";
import ProductListing from "../components/ProductListing";
const PRODUCTS_LIST = [
  {
    title: '#1 Nồi Thủy Tinh Luminarc Amberline C6317 – 1 Lít',
    img: 'http://dpegb9ebondhq.cloudfront.net/product_photos/52778003/Little_20Mermaid_202_medium.jpg',
    path: '/product/1',
    tag: 'be-trai',
    salePrice: '269000',
    price: '399000',
  },
  {
    title: '#2 Bộ Dao Cao Cấp 8 Món GoodLife',
    img: 'http://d310a9hpolx59w.cloudfront.net/product_photos/52777889/Alice_20in_20Wonderland_medium.jpg',
    path: '/product/1',
    tag: 'be-trai',
    salePrice: '350000',
    price: '399000',
  },
  {
    title: '#3 Khuôn Bánh Chống Dính Carlmann Hình Trái Tim SL4008 (26.5x24x8cm)',
    img: 'http://dpegb9ebondhq.cloudfront.net/product_photos/56006861/IMG_7600_medium.JPG',
    path: '/product/1',
    tag: 'be-trai',
    salePrice: '',
    price: '269000',
  },
  {
    title: '#4 Bộ Dao Muỗng Nĩa Data 24 Món Moriitalia IK008204',
    img: 'http://dlp2gfjvaz867.cloudfront.net/product_photos/56007206/IMG_7146_medium.JPG',
    path: '/product/1',
    tag: 'be-trai',
    salePrice: '',
    price: '269000',
  },
  {
    title: '#4 Đèn Diệt Muỗi Comet CM079',
    img: 'http://dlp2gfjvaz867.cloudfront.net/product_photos/54732998/light_20denim_medium.jpg',
    path: '/product/1',
    tag: '0% Trả góp',
    salePrice: '',
    price: '269000',
  },
  {
    title: '#4 Đèn Diệt Muỗi Comet CM079',
    img: 'http://dpegb9ebondhq.cloudfront.net/product_photos/53476451/rapunzel_medium.jpg',
    path: '/product/1',
    tag: '0% Trả góp',
    salePrice: '',
    price: '269000',
  },
  {
    title: '#4 Đèn Diệt Muỗi Comet CM079',
    img: 'http://d1nr5wevwcuzuv.cloudfront.net/product_photos/56415116/geometric_medium.jpg',
    path: '/product/1',
    tag: '0% Trả góp',
    salePrice: '',
    price: '269000',
  },
  {
    title: '#4 Đèn Diệt Muỗi Comet CM079',
    img: 'http://d310a9hpolx59w.cloudfront.net/product_photos/57850502/christmas_20dress_204_medium.jpg',
    path: '/product/1',
    tag: '0% Trả góp',
    salePrice: '',
    price: '269000',
  }
]

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
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Container>
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
              <Row>
                <Col sm={3}>
                  <div className="title-slider">Hàng mới về</div>
                  <Slider dots={false} slidesToShow={1}>
                    {
                      PRODUCTS_LIST.map((item, id) => <div key={id}><Product {...item} /></div> )
                    }
                  </Slider>
                  <div className="title-slider">Giảm giá</div>
                  <Slider dots={false}>
                    {
                      PRODUCTS_LIST.map((item, id) => <div key={id}><Product {...item} /></div> )
                    }
                  </Slider>

                </Col>
                <Col sm={9}>
                  <div className="mystyle-products">
                    {
                      PRODUCTS_LIST.map((item, id) => <Product key={id} {...item} />)
                    }
                  </div>
                </Col>
              </Row>
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
              <Row>
                <Col sm={3}>
                  <div className="title-slider">Hàng mới về</div>
                  <Slider dots={false}>
                    {
                      PRODUCTS_LIST.map((item, id) => <div key={id}><Product {...item} /></div> )
                    }

                  </Slider>
                  <div className="title-slider">Giảm giá</div>
                  <Slider dots={false}>
                    {
                      PRODUCTS_LIST.map((item, id) => <div key={id}><Product {...item} /></div> )
                    }
                  </Slider>
                </Col>
                <Col sm={9}>
                  <div className="mystyle-products">
                    {
                      PRODUCTS_LIST.map((item, id) => <Product key={id} {...item} />)
                    }
                  </div>
                </Col>
              </Row>
            </div>
          </div>          
          <ProductListing postEdges={postEdges} />
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
      limit: 2000
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
  }
`;
