import React from "react";
import Helmet from "react-helmet";
import Select, {Option} from 'rc-select';
import _ from 'lodash'
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

import {
  Container,
  Product,
  Row,
  Col,
  CustomCheckbox,
  Card,
  Widget,
  HEADLINE,
  CAPTION
} from '../components/mystyle'
import ProductListing from "../components/ProductListing";

import {PRIMARY_NAVIGATION} from "../../data/data";

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const cateObj = _.find(PRIMARY_NAVIGATION, (item) => {return item.key === category} );
    return (
      <div className="category-container">        
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <Container>
          <Row>
            <Col sm={3}>
              <Card>
                <Card.Body>
                  <div className="filters-group">
                    <div className="filter-item">
                      <CustomCheckbox value="khuyen-mai" label="Khuyến mãi" />
                    </div>
                    <div className="filter-item">
                      <CustomCheckbox value="be-trai" label="Bé Trai" />
                    </div>
                    <div className="filter-item">
                      <CustomCheckbox value="be-gai" label="Bé Gái" />
                    </div>
                    
                  </div>
                  <Widget title="Bạn muốn mua gì" className="widget-filter">
                    <Widget.Body>
                      <div className="filters-group">
                        {PRIMARY_NAVIGATION[1].childrens.map((item, index) => {
                          return (
                            <div className="filter-item" key={index}>
                              <CustomCheckbox value={item.key} label={item.name} />
                            </div>
                          )
                        })}
                        <div className="filter-item">
                          <CustomCheckbox value="khan-mu" label="Khăn mũ" />
                        </div>
                        <div className="filter-item">
                          <CustomCheckbox value="ba-lo" label="Ba Lô" />
                        </div>
                        <div className="filter-item">
                          <CustomCheckbox value="do-choi" label="Đồ chơi" />
                        </div>
                      </div>
                    </Widget.Body>
                  </Widget>
                  <Widget title="Theo độ tuổi">
                    <Widget.Body>
                      <div className="filters-group">
                        {PRIMARY_NAVIGATION[2].childrens.map((item, index) => {
                          return (
                            <div className="filter-item" key={index}>
                              <CustomCheckbox value={item.key} label={item.name} />
                            </div>
                          )
                        })}
                      </div>
                    </Widget.Body>
                  </Widget>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={9}>
              <div className="mb-4">
                <HEADLINE style={{marginBottom: 25}}>
                  { cateObj.name } ({postEdges.length})
                </HEADLINE>
                <CAPTION>
                  Quần áo { cateObj.name } đẹp, giá rẻ nhiều mẫu thời trang bé trai mới cập nhật thường xuyên mỗi ngày. 
                  <br />
                  Mặt Trời Nhỏ là nơi chọn mua đồ bé trai tin cậy nhất tại Tp.HCM.
                </CAPTION>
              </div>             
              <div style={{width: 200}}>
                <Select placeholder="Sếp theo">
                  <Option value="gia-dam-dan">Giá giảm dần</Option>
                  <Option value="gia-tang-dan">Giá tăng dần</Option>
                </Select>
              </div>
              <ProductListing postEdges={postEdges} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
