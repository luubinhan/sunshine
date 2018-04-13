import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from 'gatsby-link'
import _ from 'lodash'
import {Popover, Tag, Menu, Dropdown, Button, Icon, Collapse, Breadcrumb } from 'antd'
import PhotoGrid from 'react-photo-feed';
import 'react-photo-feed/library/style.css';


import {Container, Price, Button as MyButton, Alert, Row, Col} from '../components/mystyle'

import UserInfo from '../components/UserInfo/UserInfo';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

import '../scss/single-product.scss';

import {getCategoryName} from '../Utils'

export default class PostTemplate extends React.Component {
  _goBack = e => {
    this.props.history.goBack();
  }
  renderSizeContent = (size) => {
    switch (size) {
    case 2:
      return (
        <div className="pl-3">
          <ul>
            <li>2 tuổi</li>
            <li>Cao từ 82-85 cm</li>
            <li>Nặng từ 13 đến 13.5</li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div className="pl-3">
          <ul>
            <li>3 tuổi</li>
            <li>Cao từ 86-95 cm</li>
            <li>Nặng từ 13.5 đến 15.5</li>
          </ul>
        </div>
      );
    case 4:
      return (
        <div className="pl-3">
          <ul>
            <li>4 tuổi</li>
            <li>Cao từ 96.5-105.5 cm</li>
            <li>Nặng từ 15.5 đến 17.5</li>
          </ul>
        </div>
      );
    case 5:
      return (
        <div className="pl-3">
          <ul>
            <li>5 tuổi</li>
            <li>Cao từ 106.5-113 cm</li>
            <li>Nặng từ 17.5 đến 19</li>
          </ul>
        </div>
      );
    default:
      return (
        <div className="pl-3">
          <ul>
            <li>2 tuổi</li>
            <li>Cao từ 82-85 cm</li>
            <li>Nặng từ 13.5 đến 15.5</li>
          </ul>
        </div>
      )
    }
  }
  renderSize = (size, index) => {
    return (
      <Popover placement="top" title="Dành cho bé" content={this.renderSizeContent(size)} trigger="hover">
        <MyButton key={index} color="secondary" outline>
          {size}
        </MyButton>
      </Popover>
    )
  }
  renderSizes = (sizes) => {
    return (
      <div className="sizes-row">
        <div className="d-flex justify-content-between">
          <div>Size:</div>
          <div><GatsbyLink to='size-chuan-kich-thuoc-quan-ao-tre-em'>Bảng kích thước chuẩn <i className="ion-arrow-right-c" /></GatsbyLink></div>
        </div>
        <div className="mt-3">
          {sizes.map((size, index) => this.renderSize(size, index))}
        </div>
      </div>
    )
  }
  handleMenuClick = e => {

  }
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
    // ALL THE PHOTOS
    const allPhotos = [];
    if (post.cover) allPhotos.push({id: 1, src: post.cover, bigSrc: post.cover});
    if (post.thumb1) allPhotos.push({id: 2, src: post.thumb1, bigSrc: post.thumb1});
    if (post.thumb2) allPhotos.push({id: 3, src: post.thumb2, bigSrc: post.thumb2});
    if (post.thumb3) allPhotos.push({id: 4, src: post.thumb3, bigSrc: post.thumb3});
    if (post.thumb4) allPhotos.push({id: 5, src: post.thumb4, bigSrc: post.thumb4});
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    const cateName = getCategoryName(post.category)
    return (
      <div className="single-product">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div style={{ backgroundColor: '#f7f7f7', paddingTop: 10, paddingBottom: 10, marginBottom: 20 }}>
          <Container fluid>
            <div className="d-flex justify-content-between">
              <span role="button" onClick={this._goBack}>
                <i className="ion-android-arrow-back"/>
                <u style={{paddingLeft: 5}}>
                Quay lại
                </u>
              </span>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">Trang Chủ</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={`/category/${post.category}`}>{cateName}</a></Breadcrumb.Item>
                <Breadcrumb.Item>{post.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Container>
        </div>
        <div className="product type-product has-post-thumbnail">
          <Container fluid>
            <Row>
              <Col sm={8}>
                <PhotoGrid columns={3} photos={allPhotos} />
              </Col>
              <Col sm={4}>
                <div className="summary entry-summary">
                  <Tag color="#f50">{cateName}</Tag>
                  <div className="product_meta">
                    <PostTags tags={post.tags} />
                  </div>
                  <h1 className="product_title entry-title">{post.title}</h1>
                  <Price price={post.price} salePrice={post.salePrice}/>
                  <Collapse style={{marginBottom: 20}}>
                    <Collapse.Panel header="Tính chi phí vận chuyển" key="1">
                      <Alert color="success">
                        <b>Miễn Phí Vận Chuyển</b> cho đơn hàng có giá trị từ <b>300.000₫</b>
                      </Alert>
                      <div className="d-flex justify-content-between">
                        <div>
                          Vận Chuyển tới
                        </div>
                        <div>
                          <Dropdown.Button overlay={menu}>
                            Dropdown
                          </Dropdown.Button>
                        </div>
                      </div>
                      <hr/>
                      <div className="d-flex justify-content-between">
                        <div>
                          Phí Vận Chuyển
                        </div>
                        <div>
                          <h3>1.360.000</h3>
                        </div>
                      </div>
                    </Collapse.Panel>
                  </Collapse>
                  {!_.isEmpty(post.sizes)
                    ? this.renderSizes(post.sizes)
                    : null
                  }
                  <MyButton block size="lg" color="warning" style={{marginBottom: 30}}>
                    <span style={{display: 'block', fontSize: 12}}>
                      NHẮN TIN FACEBOOK
                    </span>
                    <span>
                      ĐỂ MUA HÀNG
                    </span>
                  </MyButton>
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
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <div className="single-post-container">
              <div className="post-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </div>
          </Container>
        </div>
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
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
      }
    }
  }
`;
