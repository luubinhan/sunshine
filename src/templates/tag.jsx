import React from 'react';
import Helmet from 'react-helmet';
import Select, {Option} from 'rc-select';
import _ from 'lodash'

import PostListing from '../components/PostListing/PostListing';
import FilterSidebar from '../components/FilterSidebar'
import config from '../../data/SiteConfig';

import {
  Container,
  Row,
  Col,
  CustomCheckbox,
  Card,
  Widget,
  HEADLINE,
  CAPTION
} from '../components/mystyle'
import ProductListing from '../components/ProductListing';
import {onFilter} from '../Utils/common'

import {PRIMARY_NAVIGATION} from '../../data/data';

export default class TagTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUnpagedData: this.props.data.allMarkdownRemark.edges
    }
    this._onFilter = onFilter.bind(this);
  }
  getCategoryName = (search) => {
    while (search.charAt(0) === '?') {
      search = search.substr(1);
    }
    const arraySearch = search.split('=');
    return _.find(PRIMARY_NAVIGATION, (item) => { return item.key === arraySearch[1] });
  }
  render() {
    const tag = _.kebabCase(this.props.pathContext.tag);
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const tagObj = _.find(PRIMARY_NAVIGATION[0].childrens, (item) => { return item.key === tag });
    
    const {
      filteredUnpagedData
    } = this.state;
    const {
      location
    } = this.props;
    let cateObj = {};
    if (location.search) {
      cateObj = this.getCategoryName(location.search);
      console.log(cateObj)
    }
    return (
      <div className="tag-container">
        <Helmet title={`Quần áo trẻ em trong mục "${tag}" | ${config.siteTitle}`} />        
        <Container>
          <div className="cate__header">
            <Row>
              <Col sm={2} />
              <Col>
                <div className="align-center">
                  <HEADLINE style={{marginBottom: 25}}>
                    {cateObj && cateObj.name} ({filteredUnpagedData.length} sản phẩm)
                  </HEADLINE>
                  <CAPTION style={{display: 'none'}}>
                    Quần áo  đẹp, nhiều mẫu thời trang mới, cập nhật thường xuyên.
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
            <Col sm={3}>
              <FilterSidebar onFilter={this._onFilter} selectedTags={[tagObj.key]} />
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
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
          }
        }
      }
    }
  }
`;
