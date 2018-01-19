import React, { Component } from 'react';
import Link from 'gatsby-link';
import UserLinks from '../UserLinks/UserLinks';

import './Footer.scss';

import {
  Container,
  Row,
  Col,
  Button
} from '../mystyle'

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
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
                  <div className="col-xs-12 col-md-2 footer-widget-1">
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
                              0988 990 168
                              </a>
                              -
                              <a href="tel:01699 163 056">01699 163 056</a>
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
                  <div className="col-xs-12 col-md-2 footer-widget-2">
                    <div className="widget widget-container">
                      <div className="widget-body">
                        <div className="menu">
                          <ul className="menu">
                            <li className="menu-item">
                              <Link to="/huong-dan-mua-hang">Hướng dẫn mua hàng</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/hinh-thuc-thanh-toan">Hình thức thanh toán</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/bang-gia-ship-ems-theo-buu-dien">Bảng giá ship EMS theo bưu điện</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-2 footer-widget-3">
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
                  <div className="col-xs-12 col-md-3 col-sm-6 footer-widget-4 ml-auto">
                    <div className="widget widget-container">
                      <div className="widget-body">
                        <div className="menu">
                          <ul className="menu">
                            <li className="menu-item">
                              <Button href={url} outline color="secondary" icon="ion-social-rss">
                                Subscribe
                              </Button>
                            </li>
                          </ul>
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
              <Col>
                <div className="copyright">
                  {copyright}
                </div>
              </Col>
              <Col>
                <div className="credit">
                  <ul className="footer-nav">
                    <li>
                      <Link to="/support-and-faq">Support & FAQ</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/copyright">Copyright</Link>
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
