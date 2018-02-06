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
  CAPTION
} from '../components/mystyle'
import ProductListing from '../components/ProductListing';
import FilterSidebar from '../components/FilterSidebar'

import {PRIMARY_NAVIGATION} from '../../data/data';

export default class CategoryTemplate extends React.Component {
  state = {
    filteredUnpagedData: this.props.data.allMarkdownRemark.edges
  }
  //handle when filter been changed
  _onFilter = filterBy => {
    let newFilteredUnpagedData = [...this.props.data.allMarkdownRemark.edges];
    //filter by tag
    if (filterBy.tag.length !== 0) {
      newFilteredUnpagedData = _.filter(newFilteredUnpagedData, item => {
        //loop through the tag array to check with filterBy selected array
        if (item.node.frontmatter.tags !== null) {
          for (let i = 0; i < item.node.frontmatter.tags.length; i += 1) {
            const checkTag = _.kebabCase(item.node.frontmatter.tags[i]);
            if (filterBy.tag.indexOf(checkTag) !== -1) {
              return true
            }
          }
        }
        return false
      })
    }
    // filter by category
    if (filterBy.category.length !== 0) {
      newFilteredUnpagedData = _.filter(newFilteredUnpagedData, item => {
        return (filterBy.category.indexOf(item.node.frontmatter.category) !== -1)
      })
    }
    this.setState({filteredUnpagedData: newFilteredUnpagedData})
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
          <Row>
            <Col sm={3}>
              <FilterSidebar onFilter={this._onFilter} cate={cateObj} />
            </Col>
            <Col sm={9}>
              <div className="mb-4 mt-4">
                <HEADLINE style={{marginBottom: 25}}>
                  { cateObj.name } ({filteredUnpagedData.length})
                </HEADLINE>
                <CAPTION>
                  Quần áo { cateObj.name } đẹp, giá rẻ nhiều mẫu thời trang bé trai mới cập nhật thường xuyên mỗi ngày. 
                  <br />
                  Mặt Trời Nhỏ là nơi chọn mua đồ bé trai tin cậy nhất tại Tp.HCM.
                </CAPTION>
              </div>
              <div style={{width: 200}} className="mb-4">
                <Select placeholder="Sếp theo">
                  <Option value="gia-dam-dan">Giá giảm dần</Option>
                  <Option value="gia-tang-dan">Giá tăng dần</Option>
                </Select>
              </div>
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
