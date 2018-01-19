import React, { Component } from 'react';
import Link from 'gatsby-link';
import UserLinks from '../UserLinks/UserLinks';

import './Footer.scss';

import {
  Container,
  Row,
  Col
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
                  <div className="col-xs-12 col-md-3 col-sm-6 footer-widget-1">
                    <div className="widget widget-container">
                      <div className="widget-title">Liên hệ</div>
                      <div className="widget-body">
                        <div className="textwidget">
                          <div className="group-icons">
                            <p className="home-icon">
                              <span className="pr-10">
                                <i className="ion-android-pin"></i>
                              </span>
                              198 West 21th Street, Suite 721 New York NY 10010
                            </p>
                            <p className="phone-icon">
                              <span className="pr-10">
                                <i className="ion-android-call"></i>
                              </span>
                              <a href="tel:0988 990 168">
                              0988 990 168</a> - <a href="tel:01699 163 056">01699 163 056</a>
                              
                            </p>
                            <p className="email-icon">
                              <span className="pr-10">
                                <i className="ion-android-mail"></i>
                              </span>
                              <a href="mailto:youremail@yourdomain.com" target="_blank">youremail@yourdomain.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 col-sm-6 footer-widget-2">
                    <div className="widget widget-container">
                      <div className="widget-title">GIỚI THIỆU</div>
                      <div className="widget-body">  
                        <div className="menu">
                          <ul className="menu">
                            <li className="menu-item">
                              <a href="">Giới thiệu</a>
                            </li>
                            <li className="menu-item">
                              <a href="">Hướng dẫn mua hàng</a>
                            </li>
                            <li className="menu-item">
                              <a href="">Hình thức thanh toán</a>
                            </li>
                            <li className="menu-item">
                              <a href="">Bản giá ship EMS theo bưu điện</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 col-sm-6 footer-widget-3">
                    <div className="widget widget-container">
                      <div className="widget-title">Tài khoản Vietcombank</div>
                      <div className="widget-body">
                        <div className="menu">
                          <dl>
                            <dt>Chủ tài khoản:</dt>
                            <dd>Lưu Bình An</dd>
                            <dt>Số tài khoản:</dt>
                            <dd>0181-003-023-502</dd>
                          </dl>
                          <div className="widget-title">
                            Tài khoản ACB
                          </div>
                          <dl >
                            <dt>Chủ tài khoản:</dt>
                            <dd>Trương Thị Tố Mi</dd>
                            <dt>Số tài khoản:</dt>
                            <dd>0181-003-023-502</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 col-sm-6 footer-widget-4">
                    <div className="widget widget-container">
                      <div className="widget-title">KẾT NỐI VỚI CHÚNG TÔI</div>
                      <div className="widget-body">
                        <div className="menu">
                          <ul className="menu">
                            <li className="menu-item">
                              <Link to={url}>
                                Subscribe
                              </Link>
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
