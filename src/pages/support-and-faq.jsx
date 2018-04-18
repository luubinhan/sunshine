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
                      <div className="pl-30">
                        <ul>
                          <li>
                          Khu vực nội thành TP.HCM từ 1 đến 2 ngày
                          </li>
                          <li>
                          Các tỉnh khác, mình sẽ gởi qua Bưu Điện, thời gian từ 2 đến 3 ngày làm việc
                          </li>
                        </ul>
                      </div>
                    </Panel>
                    <Panel header="Chi phí giao hàng" key="2">
                      <p>
                        Shop cam kết giao sản phẩm đến bạn sớm nhất có thể với mức phí hợp lý.
                      </p>
                      <p>Miễn phí giao hàng cho hóa đơn trên 500.000 đ</p>
                      <div className="pl-30">
                        <ul>
                          <li>Quận 1, 3, 5 , 6, 8 , 10, 11 TP.HCM phí là 20.000 đ</li>
                          <li>Các quận khác và tỉnh 30.000 đ</li>
                        </ul>
                      </div>
                    </Panel>
                    <Panel header="Chính sách đổi trả" key="4">
                      <p>Shop chỉ chấp nhận đổi trả hàng trong các trường hợp sau</p>
                      <div className="pl-30">
                        <ul>
                          <li>Sản phẩm bị lỗi do sản xuất</li>
                          <li>Không vừa, shop sẽ đổi lại size khác.</li>
                        </ul>
                      </div>
                      <p>
                        Đổi hàng trong 5 ngày kể từ ngày nhận hàng, các quận nộ thành, các mom cứ báo lại size mình sẽ mang đến đổi size cho các mom
                      </p>
                    </Panel>
                    <Panel header="Hình thức thanh toán" key="6">
                      <p>Chuyển khoản ( chuyển khoản ít nhất 50% đối với khu vực ngoại thành).</p>
                      <p>
                        Thanh toán khi nhận hàng đối với các quận TP.HCM
                      </p>
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
