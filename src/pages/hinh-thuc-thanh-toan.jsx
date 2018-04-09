import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from '../../data/SiteConfig';
import {
  Container,
  Row,
  Col
} from '../components/mystyle'

import '../scss/lien-he.scss'

class HinhThucThanhToan extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Liên Hệ | ${config.siteTitle}`} />
        <section className="section section-contact">
          <div className="inner">
            <Container>
              <Row>
                <Col>
                  <h3>Địa chỉ Shop</h3>
                </Col>
                <Col>
                  
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    );
  }
}

export default HinhThucThanhToan;
