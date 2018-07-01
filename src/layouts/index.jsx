import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink, {navigateTo, withPrefix} from 'gatsby-link';
import { push as MenuBuger } from 'react-burger-menu';
import {BackTop, Icon, Popover} from 'antd';
import 'antd/dist/antd.css'

import config from '../../data/SiteConfig';
import {PRIMARY_NAVIGATION} from '../../data/data';
import '../scss/antd.scss';
import '../scss/main.scss';
import '../scss/responsive.scss';


import {Container, Master, Nav, Row, Col, Button} from '../components/mystyle'
import Footer from '../components/Footer'

import logoImg from './logo-shop-mat-troi-nho.png';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBugger: false
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({showBugger: false})
  }
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/';
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '');
    let title = '';
    if (currentPath === '') {
      title = 'Home';
    } else if (currentPath === 'tags/') {
      title = 'Tags';
    } else if (currentPath === 'categories/') {
      title = 'Categories';
    } else if (currentPath === 'about/') {
      title = 'About';
    } else if (currentPath.includes('posts')) {
      title = 'Article';
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  }
  contentGiaoHang = () => {
    return (
      <div>
        <ul className="pl-30">
          <li>Giao hàng tiết kiệm</li>
          <li>Giao hàng qua Viettel Post</li>
          <li>Giao hàng nhanh trong ngày</li>
        </ul>
      </div>
    )
  }
  contentThanhToan = () => {
    return (
      <div>
        <p>Thanh toán sau khi nhận và kiểm tra hàng, áp dụng cho các quận ở TP.HCM</p>
        <p>Chuyển khoản 50% hóa đơn cho các tỉnh khác.</p>
      </div>
    )
  }
  contentUuDai = () => {
    return (
      <div>
        <p>Giảm theo % trên từng đơn hàng cho khách hàng thân thiết</p>
      </div>
    )
  }
  contentDoiTra = () => {
    return (
      <div>
        <ul className="pl-30">
          <li>Sản phẩm bị lỗi do sản xuất</li>
          <li>Không vừa size, đổi size miễn phí</li>
        </ul>
      </div>
    )
  }
  renderChildrenMenu = (props) => {
    return (
      <ul className="list-group list-group-flush">
        {props.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              <span style={{cursor: 'pointer'}} onClick={() => this.callChangeLink(item.href)}>
                {item.name}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }
  callChangeLink = (href) => {
    navigateTo(`${config.pathPrefix}${href}`);
    this.setState({showBugger: false})
  }
  toggleMenu = (e) => {
    this.setState({showBugger: true});
  }
  render() {
    const { children } = this.props;
    const pathArray = this.props.location.pathname;
    const selectedKey = pathArray.split('/').slice(-1);
    return (
      <div className="mystyle">
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
          <script src="https://shopmattroinho.com/facebook.js" defer="true" />
        </Helmet>
        <div id="outer-container">
          <Button className="bugger-menu-control" primary onClick={this.toggleMenu}>
            <i className="ion-android-menu"/>
          </Button>
          <MenuBuger pageWrapId="page-wrap" outerContainerId='outer-container' isOpen={this.state.showBugger} >
            {PRIMARY_NAVIGATION.map((menu, index) => {
              const hasChildrens = !!((menu.childrens !== undefined && menu.childrens.length !== 0))
              return (
                <ul className="menu-mobile list-group list-group-flush" key={index}>
                  <li className="list-group-item list-group-item-primary">
                    <span style={{cursor: 'pointer'}} onClick={() => this.callChangeLink(menu.href)}>
                      {menu.name}
                    </span>
                  </li>
                  { hasChildrens ? this.renderChildrenMenu(menu.childrens) : null }
                </ul>
              )
            })}
          </MenuBuger>
          <main id="page-wrap">
            <div id="header">
              <div className="header">
                <div className="header-inner">
                  <Container fluid>
                    <Row>
                      <Col>
                        <div className="d-flex">
                          <GatsbyLink to="/" className="navbar-brand">
                            <img src={logoImg} alt={config.siteTitle} />
                          </GatsbyLink>
                          <Nav selectedKey={selectedKey[0]} items={PRIMARY_NAVIGATION} className="primary-nav" />
                          <div className="hightlight-features">
                            <div className="highlight-item">
                              <div className="img-holder">
                                <i className="ion-bag"></i>
                              </div>
                              <div className="desc-block">
                                <Popover content={this.contentGiaoHang()} title="Giao hàng tận nơi" trigger="hover">
                                  <div className="">Giao hàng toàn quốc</div>
                                </Popover>
                              </div>
                            </div>
                            <div className="highlight-item">
                              <div className="img-holder">
                                <i className="ion-cash"></i>
                              </div>
                              <div className="desc-block">
                                <Popover content={this.contentThanhToan()} title="Đa dạng hình thức thanh toán" trigger="hover">
                                  <div className="">Thanh toán khi nhận hàng</div>
                                </Popover>
                              </div>
                            </div>
                            <div className="highlight-item">
                              <div className="img-holder">
                                <i className="ion-happy-outline"></i>
                              </div>
                              <div className="desc-block">
                                <Popover content={this.contentUuDai()} title="Ưu đãi" trigger="hover">
                                  <div className="">Ưu đãi khách hàng thân thiết</div>
                                </Popover>
                              </div>
                            </div>
                            <div className="highlight-item">
                              <div className="img-holder">
                                <i className="ion-cube"></i>
                              </div>
                              <div className="desc-block">
                                <Popover content={this.contentDoiTra()} title="Chính sách đổi trả" trigger="hover">
                                  <div className="">Đổi trả hàng lỗi</div>
                                </Popover>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col className="ml-a">
                        <div className="top-info-block">
                          <a href={config.facebook} target="_blank" className="link-facebook">
                            <i className="ion-social-facebook" />
                          </a>
                          <div className="hotline-badge hidden-xs">
                            <i className="ion-ios-telephone" />
                            <div className="hotline-number"><a href={`tel:${config.phone}`}>{config.phone}</a></div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
            <Master>
              {children()}
            </Master>
            <Footer config={config} />
          </main>
        </div>
      </div>
    );
  }
}
