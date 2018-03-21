import React from 'react';
import Helmet from 'react-helmet';
import Select, {Option} from 'rc-select';
import _ from 'lodash'
import 'rc-select/assets/index.css';
import config from '../../data/SiteConfig';

import {
  Container,
  Row,
  Col,
  HEADLINE,
  CAPTION,
  Button
} from '../components/mystyle'
import ProductListing from '../components/ProductListing';
import FilterSidebar from '../components/FilterSidebar'
import {onFilter} from '../Utils/common'

import {PRIMARY_NAVIGATION} from '../../data/data';

export default class CategoryTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUnpagedData: this.props.data.allMarkdownRemark.edges
    }
    this._onFilter = onFilter.bind(this)
  }
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const cateObj = _.find(PRIMARY_NAVIGATION, (item) => { return item.key === category });
    const {
      filteredUnpagedData
    } = this.state;
    return (
      <div className="category-container">
        <Helmet
          title={`Quần áo trẻ em trong mục "${category}" | ${config.siteTitle}`}
        />
        <Container>
          <div className="cate__header">
            <Row>
              <Col sm={2}>
              </Col>
              <Col>
                <div className="align-center">
                  <HEADLINE style={{marginBottom: 25}}>
                    { cateObj.name } ({filteredUnpagedData.length} sản phẩm)
                  </HEADLINE>
                  <CAPTION style={{display: 'none'}}>
                    Quần áo { cateObj.name } đẹp, nhiều mẫu thời trang mới, cập nhật thường xuyên.
                    <br />
                    Mặt Trời Nhỏ là nơi chọn mua đồ cho bé tin cậy nhất tại Tp.HCM.
                  </CAPTION>
                </div>
              </Col>
              <Col sm={2}>
                <Select placeholder="Sếp theo">
                  <Option value="gia-dam-dan">Giá giảm dần</Option>
                  <Option value="gia-tang-dan">Giá tăng dần</Option>
                </Select>
              </Col>
            </Row>
          </div>
          <Row>
            <Col sm={3} className="sidebar">
              <FilterSidebar onFilter={this._onFilter} cate={cateObj} />
            </Col>
            <Col sm={9}>
              <ProductListing postEdges={filteredUnpagedData} />
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
            thumb1
            thumb2
            thumb3
            thumb4
            mau
            sizes
            date
            price
            salePrice
            category
          }
        }
      }
    }
  }
`;
