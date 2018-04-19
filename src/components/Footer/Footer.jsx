import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link'
import UserLinks from '../UserLinks/UserLinks';

import './Footer.scss';

import {
  Container,
  Row,
  Col,
} from '../mystyle'

class Footer extends Component {
  render() {
    const { config } = this.props;
    const {copyright, phone} = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="footer-inner">
          <div className="extra-zone">
            <div className="inner">
              <Container>
                <div className="footer-widgets row">
                  <div className="col-xs-12 col-md-3 footer-widget-1">
                    <div className="widget widget-container">
                      <div className="widget-body">
                        <div className="textwidget">
                          <div className="group-icons">
                            <p className="home-icon">
                              <span className="pr-10">
                                <i className="ion-android-pin"/>
                              </span>
                              {config.address}
                            </p>
                            <p className="phone-icon">
                              <span className="pr-10">
                                <i className="ion-android-call"/>
                              </span>
                              <a href="tel:0988 990 168">
                                {phone}
                              </a>
                            </p>
                            <p className="email-icon">
                              <span className="pr-10">
                                <i className="ion-android-mail"/>
                              </span>
                              <a href={`mailto:${config.email}`} target="_blank">{config.email}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 footer-widget-2">
                    <div className="widget widget-container">
                      <div className="widget-body">
                        <div className="menu">
                          <ul className="menu">
                            <li className="menu-item">
                              <GatsbyLink to="/support-and-faq">Hướng dẫn mua hàng</GatsbyLink>
                            </li>
                            <li className="menu-item">
                              <GatsbyLink to="/support-and-faq">Hình thức thanh toán</GatsbyLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 footer-widget-3">
                    <div className="widget widget-container">
                      <div className="widget-body">
                        <div className="menu">
                          <dl>
                            <dt>Vietcombank</dt>
                            <dd>Lưu Bình An</dd>
                            <dd>0181-003-023-502</dd>
                          </dl>
                          <dl>
                            <dt>ACB</dt>
                            <dd>Trương Thị Tố Mi</dd>
                            <dd>0181-003-023-502</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 footer-widget-4">
                    <div className="widget widget-container">
                      <div className="widget-body">
                        <div className="menu">
                          <UserLinks config={config} labeled />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Container>
            <Row>
              <Col sm={6} xs={12}>
                <div className="copyright">
                  {copyright}
                </div>
              </Col>
              <Col sm={6} xs={12}>
                <div className="credit">
                  <ul className="footer-nav">
                    <li>
                      <GatsbyLink to="/support-and-faq">Câu hỏi thường gặp</GatsbyLink>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer;
