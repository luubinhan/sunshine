import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash'
import config from '../../data/SiteConfig';

import {
  Container,
  CAPTION,
} from '../components/mystyle'
import ProductListing from '../components/ProductListing';
import FilterSidebar from '../components/FilterSidebar'
import {onFilter} from '../Utils/common'

import {PRIMARY_NAVIGATION} from '../../data/data';

export default class CategoryTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUnpagedData: this.props.data.allMarkdownRemark.edges,
    }
    this._onFilter = onFilter.bind(this)
  }
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const cateObj = _.find(PRIMARY_NAVIGATION, (item) => item.key === category);
    const {
      filteredUnpagedData,
    } = this.state;
    return (
      <div className="category-container">
        <Helmet
          title={`Quần áo trẻ em trong mục "${category}" | ${config.siteTitle}`}
        />
        <Container fluid>
          <div className="container-sidebar">
            <div className="sidebar">
              <FilterSidebar
                onFilter={this._onFilter}
                cate={cateObj}
              />
            </div>
            <div className="right-wrapper">
              <div className="muted pt-30 pb-30">
                Quần áo { cateObj.name } (tìm thấy {filteredUnpagedData.length} sản phẩm)
              </div>
              <CAPTION style={{display: 'none'}}>
                Quần áo { cateObj.name } đẹp, nhiều mẫu thời trang mới, cập nhật thường xuyên.
                <br />
                Quần Áo Trẻ Em - Mặt Trời Nhỏ là nơi chọn mua đồ cho bé tin cậy nhất tại Tp.HCM.
              </CAPTION>
              <ProductListing postEdges={filteredUnpagedData} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
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