import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Collapse } from 'antd';

import config from '../../data/SiteConfig';
import {
  Container,
  Row,
  Col,
  DISPLAY4,
  Button
} from '../components/mystyle'

import '../scss/lien-he.scss'

class FAQs extends Component {
  render() {
    const {Panel} = Collapse;
    return (
      <div className="pt-40">
        <Helmet title={`Câu hỏi mua sắm thường gặp | ${config.siteTitle}`} />
        <section className="section section-answers">
          <div className="inner">
            <Container>
              <h3>Câu hỏi thường gặp</h3>
              <Row>
                <Col sm={8}>
                  <Collapse defaultActiveKey={['1']}>
                    <Panel header="Thời gian giao hàng là bao lâu" key="1">
                      <p>
                        Thời gian giao hàng dự kiến sẽ khác nhau đối với địa chỉ giao hàng:
                      </p>
                    </Panel>
                    <Panel header="Chi phí giao hàng" key="2">
                      <p>
                        Shop cam kết giao sản phẩm đến bạn sớm nhất có thể với mức phí hợp lý.
                      </p>
                    </Panel>
                    <Panel header="Chính sách đổi trả" key="444">
                      <p>Chính sách đổi trả</p>
                    </Panel>
                    <Panel header="Chọn kích cỡ phù hợp" key="5">
                      <p>Chính sách đổi trả</p>
                    </Panel>
                    <Panel header="Hình thức thanh toán" key="6">
                      <p>Chính sách đổi trả</p>
                    </Panel>
                  </Collapse>
                </Col>
                <Col sm={4}>
                  <div className="text-center">
                    <DISPLAY4>
                      <i className="ion-chatboxes" />
                    </DISPLAY4>
                    <h3>
                      Bạn có câu hỏi khác ?
                    </h3>
                    <Button primary size="lg" href={config.facebook}>
                      Nhắn qua Facebook
                    </Button>
                    <br />
                    <br />
                    <p>
                        Từ thứ 2 đến thứ 6: 9 sáng đến 9 giờ tối
                    </p>
                    <p>
                        Thứ 7 - Chủ Nhật: 9 sáng đến 12 giờ trưa
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    );
  }
}

export default FAQs;
