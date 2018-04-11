import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from 'gatsby-link';
import {BackTop} from 'antd';
import 'antd/dist/antd.css'

import config from '../../data/SiteConfig';
import {PRIMARY_NAVIGATION, RIGHT_NAV} from '../../data/data';
import '../scss/main.scss';
import '../scss/antd.scss';

import {Container, Master, Nav, Row, Col} from '../components/mystyle'
import Footer from '../components/Footer'

import logoImg from './logo-shop-mat-troi-nho.png';

export default class MainLayout extends React.Component {
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
  render() {
    const { children } = this.props;
    const pathArray = this.props.location.pathname;
    const selecatedKey = pathArray.split('/').slice(-1);
    return (
      <div className="mystyle">
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div id="header">
          <div className="header">
            <div className="header-inner">
              <Container fluid>
                <Row>
                  <Col sm={5}>
                    <Nav selecatedKey={selecatedKey[0]} items={PRIMARY_NAVIGATION} className="primary-nav" />
                  </Col>
                  <Col sm={3}>
                    <GatsbyLink to="/" className="navbar-brand">
                      <img src={logoImg} height="40" alt="" />
                    </GatsbyLink>
                  </Col>
                  <Col sm={4}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="top-info-block">
                      <a href="facebook.com/" className="link-facebook">
                        <i className="ion-social-facebook" />
                      </a>
                      <div className="hotline-badge">
                        <i className="ion-ios-telephone" />
                        <div className="hotline-number"><a href="tel:1900-6067">1900-6067</a></div>
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
        <BackTop />
      </div>
    );
  }
}
